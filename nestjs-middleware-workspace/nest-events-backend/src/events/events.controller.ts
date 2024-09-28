import { Controller, Get, Post, Patch, Delete, Param, Body, HttpCode } from '@nestjs/common';
import { CreateEventDto } from './create-event.dto';
import { UpdateEventDto } from './update-event.dto';
import { Event } from './event.entity';

@Controller('events')
export class EventsController {
    private eventsStore: Event[] = [];
    @Get()
    fetchAllEvents(){
        return this.eventsStore;
    }

    @Get(':id')
    fetchEvent(@Param('id') id){
        return this.eventsStore.find(event => (event.id === parseInt(id)));
    }

    @Post()
    create(@Body() input:CreateEventDto){
       const event = {
        ...input, 
        when: new Date(),
        id: this.eventsStore.length + 1
       };
       this.eventsStore.push(event);
       return event;
    }

    @Patch(':id')
    update(@Param('id') id, @Body() input: UpdateEventDto){
        const index = this.eventsStore.findIndex(
            event => event.id === parseInt(id)
        );
        this.eventsStore[index]={
            ...this.eventsStore[index],
            ...input,
            when: input.when ? new Date(input.when) : this.eventsStore[index].when

        }
        return this.eventsStore[index];
    }

    @Delete(':id')
    @HttpCode(204)
    remove(@Param('id') id){
        this.eventsStore = this.eventsStore.filter(
            event => event.id !== parseInt(id)
        );
    }
}
