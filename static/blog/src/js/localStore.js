export default {

    setStore: (name, data= {}) => {
        data = JSON.stringify(data);
        localStorage.setItem(name, data);
    },

    getStore: (name) => {
        let data = localStorage.getItem(name);
        return data;
    }
}