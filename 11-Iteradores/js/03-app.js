// fizz buzz

/*
3 6 9 12 .... FIZZ
5 10 15 20 ... BUZZ
15 30 45 ... FIZZBUZZ
*/

nnum = 100
for (let i=1; i <= nnum; i++) {
    m3 = i%3;
    m5 = i%5;
    if ( !m3 && !m5) { console.log(`${i}: FIZZBUZZ`) }
    else if (!m3) {console.log(`${i}: FIZZ`)}
    else if (!m5) {console.log(`${i}: BUZZ`)}
}