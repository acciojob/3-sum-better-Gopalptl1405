function threeSum(arr, target) {
// write your code here
	function threeSum(S, target) {
 
		S.sort((a, b) => a - b); 
		// sort the array in ascending order
  let closestSum = Infinity; 
		// initialize closest sum to a large value
  for (let i = 0; i < S.length - 2; i++) {
    let left = i + 1; 
	  // initialize left pointer
    let right = S.length - 1;
	  // initialize right pointer
    while (left < right) {
      const sum = S[i] + S[left] + S[right]; 
		// calculate sum of current triplet
      if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
        closestSum = sum; 
		  // update closest sum if current sum is closer to target
      }
      if (sum < target) {
        left++; 
		  // move left pointer to increase sum
      } else {
        right--; 
		  // move right pointer to decrease sum
      }
    }
  }
  return closestSum; // return closest sum found
}

  
}

module.exports = threeSum;
