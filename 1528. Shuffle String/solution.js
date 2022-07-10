var restoreString = function(s, indices) {
    const ans = new Array(indices.length)
    for (i=0;i<indices.length;i++){
        ans[indices[i]]= s[i];
        
    }
    return ans.join('')
    };