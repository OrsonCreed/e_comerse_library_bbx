class Stock{
    static NumOfStocks = 0;
    constructor() {
        this.AvailableProducts = [];
        this.productCost = [];
        this.AvairableNumItems = [];
        this.NumberOfProducts = 0;
    };
            arraySummation = function(arrayName){ //Array should be of the type integer
                // prease find the way to set this function as the protected member of this class
                this.counter = 0;
            for (let i = 0; i < arrayName.length; i++) {
                this.counter = this.counter + arrayName[i];
            }
            
            return this.counter;
            }

            addNewProduct = function(product,cost,InitialItems = 1){
                this.AvailableProducts.push(product);
                this.productCost.push(cost);
                this.AvairableNumItems.push(InitialItems);
                this.NumberOfProducts++;
                return true;
                                            }
            
            pushNewItems = function(ItemIndex,NumberOfItems){
                this.AvairableNumItems[ItemIndex] = this.AvairableNumItems[ItemIndex] + NumberOfItems;
                return true;
            }
            checkAvailableItems = function(ItemIndex){
                return this.AvairableNumItems[ItemIndex];
            }

            popItems = function(ItemIndex,NumberOfItems){
                this.AvairableNumItems[ItemIndex] = this.AvairableNumItems[ItemIndex] - NumberOfItems;
                return true;
            }

            updateCost = function(ItemIndex,newCost){
                this.productCost[ItemIndex] = newCost;
                return true;
            }

            totalItemsInStock = function(){
               return this.arraySummation(this.AvairableNumItems);
            }
}








//--------------------------------------------testing------------------------------------------


var a = new Stock();
console.log(a.addNewProduct("mango",100));
console.log(a.addNewProduct("apple",200));
console.log(a.addNewProduct("pinaple",300,3));
console.log(a.totalItemsInStock());
//the indexes of products refers to the order they were added.
//so we use the index of the products to update their number of products.