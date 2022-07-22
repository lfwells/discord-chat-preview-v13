
export function tagUser(id, users) {
    const filtered = users.filter(u => u.id === id);
    const name = (filtered.length ? filtered[0].name : id);
    return `<span class='mention user'>@${name}</span>`;
}

export function tagChannel(id, channels) {
    const filtered = channels.filter(u => u.id === id);
    const name = (filtered.length ? filtered[0].name : id);
    const url = (filtered.length ? filtered[0].url : '#');
    return `<span class='mention channel'><a href="${url}">#${name}</a></span>`;
}

export function tagRole(id, roles) {
    const filtered = roles.filter(u => u.id === id);
    const name = (filtered.length ? filtered[0].name : id);
    const color = (filtered.length ? filtered[0].color : '5865f2');
    const backgroundColor = color + "AA";
    return `<span class='mention role' style='color: ${color}; background-color: ${backgroundColor};'>@${name}</span>`;
}