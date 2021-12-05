
/*
                            documentations
                            ----------------
    *the indexes of products refers to the order they were added.
    *so we use the index of the products to update their number of products.
    *string numbers are not accepted!

*/

class Stock{
    static NumOfStocks = 0;
    constructor() {
        this.AvailableProducts = [];
        this.productCost = [];
        this.AvairableNumItems = [];
        this.NumberOfProducts = 0;
    };
            arraySummation = function(arrayName){ //Array should be of the type integer
                // please find the way to set this mehtod to be the protected member of this class
                this.counter = 0;
            for (let i = 0; i < arrayName.length; i++) {
                this.counter = this.counter + arrayName[i];
            }
            
            return this.counter;
            }

            addNewProduct = function(product,cost,InitialItems = 1){
                if ((product !="" && isNaN(product)) && (!isNaN(cost) && cost != 0 )) {
                    this.AvailableProducts.push(product);
                    this.productCost.push(cost);
                    this.AvairableNumItems.push(InitialItems);
                    this.NumberOfProducts++;
                    return true;
                }else{
                    return false;
                }
                                            }
            
            pushNewItems = function(ItemIndex,NumberOfItems){
                this.AvairableNumItems[ItemIndex] = this.AvairableNumItems[ItemIndex] + NumberOfItems;
                return true;
            }
            checkAvailableItems = function(ItemIndex){
                return this.AvairableNumItems[ItemIndex];
            }

            popItems = function(ItemIndex,NumberOfItems){
                if (this.AvairableNumItems[ItemIndex] != 0) {
                    this.AvairableNumItems[ItemIndex] = this.AvairableNumItems[ItemIndex] - NumberOfItems;
                    return true;
                }else{
                    return false;
                }
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




