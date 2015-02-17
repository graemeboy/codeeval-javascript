var line, val, spacesAfter;
for (var i = 1; i <= 12; i++) {
    line = '';
    for (var j = 1; j <= 12; j++) {
        if (j == 1) {
            spacesAfter = 1;
        } else {
            spacesAfter = 3;
        }
        val = j * i;
        if (val > 9) {
            spacesAfter -= 1;
        }
        if (val > 99) {
            spacesAfter -= 1;
        }
        for (var x = 0; x < spacesAfter; x++) {
            line += " ";
        }
        line += (val).toString();
    }
    console.log(line);
}