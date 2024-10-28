function Tree(height) {
    let tree = '';
    for (let a = 1; a <= height; a++) {
        tree += ' '.repeat(height - a);
        tree += '*'.repeat(2 * a - 1);
        if (a < height) {
            tree += ' ';
        }
    }

    console.log(tree);
};