const fs = require('fs');

const get = () => {
    const posts = fs.readFileSync("database/post.json");

    return JSON.parse(posts)
}

const save = (post) => {
    const posts = get();

    posts.push(post);

    fs.writeFileSync("database/post.json", JSON.stringify(posts));
}

module.exports = {
    get,
    save,
};