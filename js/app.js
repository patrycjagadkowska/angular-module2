(function () {

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController (ShoppingListCheckOffService) {
	const toBuyList = this;
	toBuyList.items = ShoppingListCheckOffService.getItems();

	toBuyList.addToBought = function (itemIndex){
		ShoppingListCheckOffService.addToBought(itemIndex);
	}
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController (ShoppingListCheckOffService) {
	const alreadyBoughtList = this;
	alreadyBoughtList.items = ShoppingListCheckOffService.getBoughtItems();

}

function ShoppingListCheckOffService () {
	const service = this;
	const toBuyItems = [
		{name: "Cookies",
		 quantity: 10},
		 {name: "Oranges",
		 quantity: 2},
		 {name: "Apples",
		 quantity: 5},
		 {name: "Tomatoes",
		 quantity: 10},
		 {name: "Potatoes",
		 quantity: 10}
	];
	const alreadyBoughtItems = [];

	service.getItems = function (){
		return toBuyItems;
	}
	service.getBoughtItems = function (){
		return alreadyBoughtItems;
	}
	service.addToBought = function (itemIndex){
		alreadyBoughtItems.push(toBuyItems[itemIndex]);
		toBuyItems.splice(itemIndex, 1);
	}

}

})();