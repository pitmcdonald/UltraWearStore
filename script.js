function letterRemover() {

    const str = 'AABBCCCCBDDDADB';
    newstr = str.replace(/C/gi, '');
    document.write(newstr);

}