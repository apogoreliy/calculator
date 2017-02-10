export default {
    he(str) {
        return str ? String(str)
                .replace(/&/g, '&amp;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/\[/g, '&dagger;'): "";
    },

    isTypeExist(name) {
        let types = window.store.getState().types.types, exist = false, type = name.toLowerCase();

        for (let i in types){
            if(types[i]['name'].toLowerCase() === type){
                exist = true;
                break;
            }
        }
        return exist;
    },

    in_array(value, array){
        for(let i = 0; i < array.length; i++) {
            if(array[i] == value) return true;
        }
        return false;
    }
};