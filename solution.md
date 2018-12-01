## Problem 2 (GEN-BEAM) :
Creates a beam of length n-1 where n is a whole number.     
<pre><code>
(n) => { 
    return ((n > 1) ? "S" : ((n % 2) == 0) ? "L" : "R");
   }  
 
 (n) => { 
    return ((n < 0) ? "S" : ((n % 2) == 0) ? "L" : "R");
   }

</code></pre>
