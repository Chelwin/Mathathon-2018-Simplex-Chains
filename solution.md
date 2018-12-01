## Solution 2 (GEN-BEAM) :
Creates a beam of length n-1 where n is a whole number. 
<code>
(n) => { return (n > 1) ? "S" : 
                ((n % 2) == 0) ? "L" : "R" 
                ;}
</code>
