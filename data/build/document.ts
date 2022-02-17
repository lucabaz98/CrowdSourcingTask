/*
 * This class provides a representation of a single document stored in single hit stored in the Amazon S3 bucket.
 * The attribute <index> is additional and should not be touched and passed in the constructor.
 * Each field of such Document must be mapped to an attribute of this class and set up in the constructor as it is shown.
 * Take care also in providing an implementation of the function; it is used to define if a document represents the high and low gold question.
 */
export class Document {

  /* DO NOT REMOVE THIS ATTRIBUTE */
  index: number;

  title: string;
  author: string;
  numberOfPages: string;
  publisher: string;
  price: string;
  bookCover: string;
  yearOfPublication: string;
  constructor(
    index: number,
    data: JSON
  ) {
    /* DO NOT REMOVE THIS LINE */
    this.index = index;

    this.title = data["title"];
    this.author = data["author"];
    this.numberOfPages = data["numberOfPages"];
    this.publisher = data["publisher"];
    this.price = data["price"];
    this.bookCover = data ["bookCover"];
    this.yearOfPublication = data ["yearOfPublication"];

  }

  /*
   * This function determines if the current document is a gold question.
   * Possible values for the parameter: HIGH or LOW. (CAPS LOCK MANDATORY).
   * In this case, for example, if the id_par field is HIGH (LOW) then
   * the document is the HIGH (LOW) gold question
   */
  public getGoldQuestionIndex(kind: string) {
    if (this.title == kind) return this.index;
    return null
  }

}
