import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  jobs: service(),
     queryParams: {
        page: { refreshModel: true },
        sort: { refreshModel: true },
        state: { refreshModel: true }
    },

    model(params) {
        this.controllerFor('jobs.type').set('type', params.type);
        this.controllerFor('application').set('type', params.type);
        return this.jobs.find({
            type: params.type,
            state: params.state,
            page: params.page,
            order: params.order
        });
    },

    activate() {
        this._super();
        window.scrollTo(0,0);
    }

});
