nnum = 100
let i=0
while ( i < nnum) {
    console.log(i); 
    m3 = i%3;
    m5 = i%5;
    if ( !m3 && !m5) { console.log(`${i}: FIZZBUZZ`) }
    else if (!m3) {console.log(`${i}: FIZZ`)}
    else if (!m5) {console.log(`${i}: BUZZ`)}
    i++;
}