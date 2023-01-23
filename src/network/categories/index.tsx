import {BaseService} from "../base";
import {Category} from "../../models/categories";

export class CategoryService extends BaseService<Category>{

    constructor() {
        super('/categories');
    }
}