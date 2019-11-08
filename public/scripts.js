window.Vue.component("legend-info", {
    props: ['legend'],

    template: `
    <div class="card">
        <!-- 
        <div class="card-image">
            <figure class="image is-4by3">
                <img :src="legend.iconURL" alt="Legendary icon">
            </figure>
        </div> -->
        
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img :src="legend.iconURL" alt="Legendary icon">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">{{ legend.name }}</p>
                    <p class="subtitle is-6">Legendary {{ legend.type }}</p>
                </div>
            </div>
    
            <div class="content">
                {{ legend.desc }}
                <a>Add to favorites</a>
            </div>
        </div>
    </div>
    `,
});

let app = new window.Vue({

    el: "#root",

    data: {

        loading: true,
        legends: [],
        favorites: [],

    },

    computed: {

    },

    watch: {

    },

    created() {
        this.initLegends();
    },

    methods: {

        initLegends() {
            this.legends = [];
            for (let i = 30684; i < 30704; ++i) {
                this.getLegendInfo(i);
            }
        },

        async getLegendInfo(id) {
            console.log("Entered getLegendInfo()");
            let URL = "getid?id=" + id;
            try {
                this.loading = true;
                window.axios.get(URL)
                    .then(response => {
                        console.log(response.data);
                        let myData = response.data;
                        let myLegend = {
                            name: myData.name,
                            type: myData.details.type,
                            iconURL: myData.icon,
                            desc: myData.description,
                            // id: myData.id,
                        };
                        console.log(myData.id);
                        this.legends.push(myLegend);
                        this.loading = false;
                    })
                    .catch((error) => {
                        console.log("Error in getLegendInfo()");
                        console.log(error);
                    });

            }
            catch (error) {
                console.log("Error in getLegendInfo()");
                console.log(error);
            }
        },

    },

});
