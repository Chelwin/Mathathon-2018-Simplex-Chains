// robs_hex_generator.js This is Rob's inital attempt to create a generator that is a simple hexagon.
// This requires us to standardize on a "type" for generators.

// Copyright (C) 2018  Robert L. Read <read.robert@gmail.com

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.



// return "L" "R" "S" (Left, Right, Stop, from the direction of the shared edge.)
// Starts at 0.
function hexagon(n) {
    return ((n < 6) ? "L" : "S");
}

function ladder(n) {
    return ((n % 2) == 0) ? "L" : "R";
}
