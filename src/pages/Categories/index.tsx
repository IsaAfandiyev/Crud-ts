import axios from 'axios';
import React,{useEffect,useState} from "react";
import ReactDOM from "react-dom/client";
import {Category} from "../../models/categories";
import {CategoryService} from "../../network/categories";
import MaterialTable from "@material-table/core";

function Categories() {
    const [category,setCategory] = useState<Category[]>([]);

    useEffect(()=>{
        let categoryService = new CategoryService();
        categoryService.getAll()
            .then(res=> {
                setCategory(res.data);
            })
    });

    const columns = [
        {title:'Id',field:'id'},
        {title:'Name',field:'name'},
        {title:'Description',field:'description'},
    ]
    return <>
        <MaterialTable
            title="Categories"
            columns={columns}
            data={category}
            editable={{
                onRowAdd:(newRow) => new Promise((resolve,reject)=>{
                    let categoryService = new CategoryService();
                    categoryService.add(newRow)
                    resolve('sucsess')
                }),
                onRowDelete:selectedRow => new Promise((resolve,reject)=>{
                    let categoryService = new CategoryService();
                    const index = selectedRow.id
                    categoryService.delete(index?index:1,`https://northwind.vercel.app/api/categories`)
                    resolve('sucsess')
                }),
                onRowUpdate:(updatedRow,oldRow)=> new Promise((resolve,reject)=>{
                    let categoryService = new CategoryService();
                    const index = updatedRow.id
                    categoryService.edit(updatedRow,index?index:5,`https://northwind.vercel.app/api/categories`)
                    resolve('sucsess')
                    console.log('hello')
                })
            }}
            options={{
                actionsColumnIndex:-1,addRowPosition:`first`,
            }}
        />
    </>
}
export default Categories;