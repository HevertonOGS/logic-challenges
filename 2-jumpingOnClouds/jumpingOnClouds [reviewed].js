const jumpingOnClouds = (c) => {
    let jumps = 0;
    let cloud = 0;
    
    while (cloud < c.length - 1) {
        // try to jump two clouds
        if (cloud + 2 < c.length && c[cloud + 2] === 0) {
            cloud += 2;
        } else {
            cloud++;
        }
        // aways jump
        jumps++;
    }

    return jumps;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 1, 0, 0, 0, 1]));

/**
 * There is a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or . The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. It is always possible to win the game.
 * 
 * For each game, you will get an array of clouds numbered  if they are safe or  if they must be avoided.
 */
