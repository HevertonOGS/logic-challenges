const jumpingOnClouds = (c) => {
    // c is a array of 0 or 1
    
    let jumps = 0;
    
    for (let cloud = 0; cloud < c.length; cloud++) {
        if (c[cloud] === 0) {
            if (cloud > 0) {
                jumps++;                
            }
            
            if (c[cloud + 1] === 0 && c[cloud + 2] === 0) {
                cloud++;
            }
        }
    }
    
    return jumps;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 1, 0, 0, 0, 1]));
