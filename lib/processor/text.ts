export default class TextUtil {
  // NOTE: 文字列を特定文字数で切り取る処理を行う
  public static splitTextToPiece(text: string, divide: number): string[] {
    const textArray: string[] = [];

    const pieceCount = text.length / divide;

    let index = 0;

    while (index < text.length) {
      textArray.push(text.substring(index, index + pieceCount));
      index += pieceCount;
    }

    return textArray;
  }
}
