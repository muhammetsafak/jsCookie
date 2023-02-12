class jsCookieClass
{

    static cookies = [];

    constructor(){
        let cookies = [];
        let cookie = decodeURIComponent(document.cookie).split(';');
        cookie.forEach((item) => {
            let parse = item.split('=', 2);
            let name = parse[0].trim();
            let value = parse[1];

            cookies[name] = value;
        });
        self.cookies = cookies;
    }

    /**
     * 
     * @param {string} name 
     * @returns {boolean}
     */
    has(name)
    {
        return typeof self.cookies[name] !== 'undefined';
    }

    /**
     * 
     * @param {string} name 
     * @param {string} defaultValue 
     * @returns {null|string|number|object|boolean}
     */
    get(name, defaultValue = null)
    {
        return this.has(name) ? self.cookies[name] : defaultValue;
    }

    /**
     * 
     * @param {string} name 
     * @param {string} value 
     * @param {number} ttl 
     * @param {string} path 
     * @returns {boolean}
     */
    set(name, value, ttl = 84600, path = '/')
    {
        if (typeof ttl !== 'number' 
        || ttl < 1
        || typeof name !== 'string'
        || name.trim() == ''
        || typeof path !== 'string'
        || path.trim() == '') {
            return false;
        }
        let date = new Date();
        date.setTime(date.getTime() + (ttl * 1000));
        let expires = 'expires=' + date.toUTCString();
        document.cookie = name + '=' + value + ';' + expires + ';path=' + path.trim() + '; Secure';

        self.cookies[name] = value;

        return true;
    }

    /**
     * @returns {Array}
     */
    all()
    {
        return self.cookies;
    }

}

const jsCookie = new jsCookieClass();