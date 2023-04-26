import { LightningElement, api } from 'lwc';

export default class LeadEx extends LightningElement {
    
    @api ide;
    @api name;
    @api company;
    @api status;
    
}
