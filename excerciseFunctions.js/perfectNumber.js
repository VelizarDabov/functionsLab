function perfectNumber(number){
let sum = 0;
for(let i = 1; i < number ; i++){
    if(number % i === 0){
        sum += i;
    }
}
if(sum === number){
    console.log("We have a perfect number!");
}else{
console.log("It's not so perfect.");
}

}
perfectNumber(6)

/*

2p−1(2p − 1)
2^1(2^2 − 1) = 2 × 3 = 6

def perfect_number(num):
    prop_div = []
    for n in range(1, + num):
        if num % n == 0:
            prop_div.append(n)
    if sum(prop_div) == num:
        print("We have a perfect number!")
    else:
        print("It's not so perfect.")
    return num


number = int(input())
perfect_number(number)
*/