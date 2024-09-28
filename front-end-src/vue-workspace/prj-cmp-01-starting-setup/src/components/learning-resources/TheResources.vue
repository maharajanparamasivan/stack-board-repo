<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resource')" :mode="storedResourceButtonMode">Stored Resources</base-button>
        <base-button @click="setSelectedTab('add-resource')" :mode="addResourceButtonMode">Add Resources</base-button>
    </base-card>
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
    
</template>

<script>
import StoredResource from './StoredResource.vue';
import AddResource from './AddResource.vue';
export default {
    components:{StoredResource, AddResource},
    data(){
        return{
            selectedTab: 'stored-resource',
            storedResources: [
                {
                    id: 'official-guide',
                    title: 'Official Guide',
                    description: 'The official Vue JS Documentation',
                    link: 'https://vuejs.org'
                },
                {
                    id: 'google',
                    title: 'Google Search ',
                    description: 'The official Google Search Engine',
                    link: 'https://www.googl.com'
                }
            ]
        };
    },
    computed:{
        storedResourceButtonMode(){
            return this.selectedTab === 'stored-resource'? null:'flat'
        },
        addResourceButtonMode(){
            return this.selectedTab === 'add-resource'? null:'flat'
        }
        
    },
    methods:{
        setSelectedTab(tab){
            this.selectedTab = tab;
        },
        theAddResource(title, description, url){
            const newResource = {
                id: new Date().toISOString(),
                title: title,
                description: description,
                link: url
            }
            this.storedResources.unshift(newResource);
            this.selectedTab = 'stored-resource';
        },
        removeResource(resourceId){
            const resourceIndex = this.storedResources.findIndex(resource => resourceId === resource.id);
            this.storedResources.splice(resourceIndex,1);
        }
    },
    provide(){
        return {
            resources: this.storedResources,
            addResource: this.theAddResource,
            removeResource: this.removeResource
        }
    }
}
</script>