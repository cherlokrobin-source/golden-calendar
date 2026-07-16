export class CacheMonitor {


    constructor(limit = 1000) {

        this.cache = new Map();

        this.limit = limit;

        this.hits = 0;

        this.misses = 0;

    }



    set(key, value) {

        if (this.cache.size >= this.limit) {

            const firstKey =
                this.cache.keys().next().value;


            this.cache.delete(firstKey);

        }


        this.cache.set(
            key,
            {
                value,
                time: Date.now()
            }
        );

    }



    get(key) {


        const item =
            this.cache.get(key);



        if (!item) {

            this.misses++;

            return null;

        }



        this.hits++;


        return item.value;

    }




    clear() {

        this.cache.clear();

    }




    stats() {

        return {

            size:
                this.cache.size,

            limit:
                this.limit,

            hits:
                this.hits,

            misses:
                this.misses

        };

    }



}
