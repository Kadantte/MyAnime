function pad(n, size) {
  let s = String(n);
  while (s.length < (size || 2)) {
    s = "0" + s;
  }
  return s;
}

function formatToday() {
  let now = new Date();
  return `${pad(now.getMonth() + 1)}${pad(now.getDate())}${now.getFullYear()}`;
}

Date.prototype.plusHours = function(h) {
  this.setTime(this.getTime() + (h * 60 * 60 * 1000));
  return this;
}

function asUrl(s, append, prov) {
  if (append) {
    s = `${s}-${append}`;
  }
  s = s.toLowerCase();
  if ((prov || provider) in ["animemovil", "gogoanime"]) {
    s = s.replace(/[;]/g, '');
  }
  s = s.replace(/[^-a-z0-9]+/g, '-').replace(/-{2,}/, '-');
  return encodeURIComponent(s);
}

function idify(s, prov) {
  return asUrl(s, null, prov || '');
}