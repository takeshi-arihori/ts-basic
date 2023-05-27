type suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type dan = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
type player = 'first' | 'second'

// 駒の位置を表すクラス
class Position {
  constuctor(private suji: suji, private dan: dan) {}

  // パラメーターに渡された位置と現在の位置を比較するメソッド
  distanceFrom(position: Position, player: player) {
    if (player === 'first') {
      return {
        suji: Math.abs(position.suji - this.suji),
        dan: Math.abs(Number(position.dan) - Number(this.dan)),
      }
    } else {
      return {
        suji: Math.abs(position.suji - this.suji),
        dan: -Math.abs(Number(position.dan) - Number(this.dan)), // 段の位置は正負反転
      }
    }
  }
}

// 駒を表すクラス
abstract class Piece {
  // protectedはPieceクラスとサブクラスであればアクセス可能
  protected position: Position

  constructor(private readonly player: player, suji: suji, dan: dan) {
    this.position = new Position(suji, dan)
  }

  // メソッドの定義
  // 駒の移動用のメソッド
  moveTo(position: Position) {
    this.position = position
  }

  // 移動できるか判定するメソッド
  abstract canMoveTo(position: Position, player: player): boolean
}

// 抽象クラス(abstract)のインスタンスは作成できない
// new Piece('first', 1, '1')

class Osho extends Piece {
  // canMoveToメソッドを具体的に実装する
  canMoveTo(position: Position, player: player): boolean {
    const distance = this.position.distanceFrom(position, player)
    return distance.suji < 2 && distance.dan < 2
  }
}

class Game {
  private pieces = Game.makePieces()
  private static makePieces() {
    return [new Osho('first', 5, '1'), new Osho('second', 5, '9')]
  }
}

class Fu extends Piece {
  canMoveTo(position: Position, player: player): boolean {
    const distance = this.position.distanceFrom(position, player)
    // 移動先との距離が前方1マスであればOK
    return distance.suji === 0 && distance.dan === 1
  }
}

class Narikin extends Fu {
  canMoveTo(position: Position, player: player): boolean {
    const distance = this.position.distanceFrom(position, player)
    return (
      // 移動先が1マス以内
      distance.suji < 2 && distance.dan < 2
      // 左後方と右後方には進めない
      && distance.suji !== 0 && distance.dan === -1
      )
  }
}