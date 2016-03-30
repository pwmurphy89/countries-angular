var myApp = angular.module('myApp', []);
// console.log(myApp);
myApp.controller('myController', function($scope,$http){
	$http.get("countries.js").success(function(dataWeGotBack){
		console.log(dataWeGotBack);
		$scope.countries = dataWeGotBack;
	})



	$scope.countries = [
		{
			name: "Bolivia",
			president: "Evo Morales",
			flag: "red, yellow, green"
		},
		{
			name: "America",
			president: "Obama",
			flag: "red, white, blue"
		},
		{
			name: "Peru",
			president: "Ollanta Humala",
			flag: "red, white"
		},
		{
			name: "Mexico",
			president: "Enrique Peña Nieto",
			flag: "red, green, white"
		},
		{
			name: "China",
			president: "Xi JinPing",
			flag: "red, yellow"
		},
		{
			name: "Russia",
			president: "Putin",
			flag: "red,white,blue"
		},
		{
			name: "Canada",
			president: "Justin Trudeau",
			flag: "red,white"
		},
		{
			name: "France",
			president: "François Hollande",
			flag: "red,white,blue"
		},
		{
			name: "Germany",
			president: "Angela Merkel",
			flag:"black, red, yellow"
		},
		{
			name: "Sweden",
			president: "Carl XVI Gustaf of Sweden",
			flag: "blue, yellow"
		}


	]

	$scope.addCountry = function() {
		$scope.countries.push(

			{
				name: $scope.name,
				president: $scope.president,
				flag: $scope.flag
	}
	)
	}

	$scope.removeCountry = function() {
		$scope.countries.splice(i,1);

	}
});