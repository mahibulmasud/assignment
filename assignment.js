//kilometerToMeter//
function kilometerToMeter(kiloMeter) {
    if (kiloMeter >= 0) {
        var totalKilometer = kiloMeter * 1000;
        return totalKilometer;
    } else if (kiloMeter < 0) {//exception handled
        return 'Please enter a positive number';
    } else {//exception handled
        return "Your input isn't a number.";
    }
}
console.log(kilometerToMeter(7));

//budgetCalculator//
function budgetCalculator(a, b, c) {
    if (a >= 0 && b >= 0 && c >= 0) {
        var totalWatchPrice = 50 * a;
        var totalMobilePrice = 100 * b;
        var totalLeptopPrice = 500 * c;
        var total = totalWatchPrice + totalMobilePrice + totalLeptopPrice;
        return total;
    }
    //exception handled
    else if (a <= 0 && b <= 0 && c <= 0) {
        return 'Please enter a positive number';
    }
    //exception handled
    else {
        return "Please Enter a valid number";
    }
}
console.log(budgetCalculator(1, 1, 2));

//hotelCost//
function hotelCost(n) {
    if (n >= 0) {                      //exception handled
        // 1 - 10 day = 100tk
        if (n >= 1 && n <= 10) {
            for (var i = 1; i <= n; i++) {
                var oneToTen = 100 * i;

            }
            return oneToTen;
        }
        //11 - 20 day=  80tk
        else if (n >= 11 && n <= 20) {
            var n = n - 10;
            for (var i = 1; i <= n; i++) {
                var elevenToTwenty = 80 * i;
            }
            var result = 1000 + elevenToTwenty;
            return result;
        }
        //21+ day =50tk
        else {
            var n = n - 20;
            for (var i = 1; i <= n; i++) {
                var twentyOnePlus = 50 * i;
            }
            var result = 1800 + twentyOnePlus;
            return result;
        }
    }
    //exception handled
    else if (n <= 0) {
        return 'Please enter a positive number';
    }
    //exception handled
    else {
        return "Your input isn't a number";
    }
}
console.log(hotelCost(21));

//megaFriend//
function megaFriend(friendName) {
    if(friendName != null){
        var mega = friendName[0];
        for (var i = 0; i < friendName.length; i++) {

            if (mega.length < friendName[i].length) {
                mega = friendName[i];
            }
        }
        return mega;
    }else{
        return 'enter a valid string';
    }
        
}
console.log(megaFriend(['Babu', 'Babar', 'KaziMasud', 'Habala']));
