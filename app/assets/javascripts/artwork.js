class Artwork {
  constructor({id, title, description, price, image_file_name}) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.image_file_name = image_file_name;
  }

  // formatter instance method
  // this might me useful on the artwork/show
  renderHTML() {
    console.log('this would be html or handlebars...');
    // code here...
  }
}
