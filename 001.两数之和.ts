function twoSum(nums: number[], target: number): number[] {
    let hashMap: Map<number, number> = new Map();
    for (let i: number = 0; i < nums.length; i++) {
        if (hashMap.has(nums[i])) {
            let num: number | undefined = hashMap.get(nums[i]);
            return num != undefined ? [ num, i] : [];
        }
        hashMap.set(target - nums[i], i);
    }
    return [];
};
