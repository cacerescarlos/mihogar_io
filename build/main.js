webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio1_inicio1__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buscar1_buscar1__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alerta1_alerta1__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__before_cuenta1_before_cuenta1__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import {  Cuenta1Page } from "../cuenta1/cuenta1";

var Tab1Page = (function () {
    function Tab1Page(app, navCtrl, navParams) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //count$: Observable<number>;
        this.count$ = 10;
        this.tabInicio = __WEBPACK_IMPORTED_MODULE_2__inicio1_inicio1__["a" /* Inicio1Page */];
        this.tabBuscar = __WEBPACK_IMPORTED_MODULE_3__buscar1_buscar1__["a" /* Buscar1Page */];
        this.tabAvisos = __WEBPACK_IMPORTED_MODULE_4__alerta1_alerta1__["a" /* Alerta1Page */];
        this.tabCuenta = __WEBPACK_IMPORTED_MODULE_5__before_cuenta1_before_cuenta1__["a" /* BeforeCuenta1Page */];
        //this.navCtrl=this.nav1;
    }
    Tab1Page.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad Tab1Page');
        //this.count$ = 10;
    };
    Tab1Page.prototype.openPage = function (sw) {
        this.tabRef.select(sw);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Tabs */])
    ], Tab1Page.prototype, "tabRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('nav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */])
    ], Tab1Page.prototype, "nav1", void 0);
    Tab1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tab1',template:/*ion-inline-start:"C:\io\ionic_mihogar\src\final2\src\pages\candidato\tab1\tab1.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu\n        <button ion-button small menuClose>Cerrar</button>\n      </ion-title>\n      \n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button  ion-item menuClose (click)="openPage(0)">\n        Inicio\n      </button>\n      <button menuClose ion-item (click)="openPage(3)">\n        Mi Cuenta\n      </button>\n\n      <button  ion-item menuClose>\n        Ayuda\n      </button>\n\n      <button  ion-item menuClose >\n        Terminos & Condiciones\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n\n<!--color="fprimary"-->\n\n<ion-tabs #myTabs tabsPlacement="top">\n\n  <ion-tab [root]="tabInicio" tabTitle="Inicio" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tabBuscar" tabTitle="Empleos" tabIcon="search"></ion-tab>\n  <ion-tab [root]="tabAvisos" tabTitle="Alertas" tabIcon="notifications" \n   tabBadge="10"  tabBadgeStyle="danger" ></ion-tab>\n  <ion-tab [root]="tabCuenta" tabTitle="Mi Cuenta" tabIcon="person"></ion-tab>\n \n\n</ion-tabs>'/*ion-inline-end:"C:\io\ionic_mihogar\src\final2\src\pages\candidato\tab1\tab1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], Tab1Page);
    return Tab1Page;
}());

//# sourceMappingURL=tab1.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicAvisoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__before_public_before_public__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PublicAvisoPage = (function () {
    function PublicAvisoPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    }
    PublicAvisoPage.prototype.presentModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__before_public_before_public__["a" /* BeforePublicPage */]);
        modal.present();
    };
    PublicAvisoPage.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
    };
    PublicAvisoPage.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    PublicAvisoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-public-aviso',template:/*ion-inline-start:"C:\io\ionic_mihogar\src\final2\src\pages\cliente\public-aviso\public-aviso.html"*/'<ion-header>\n  <ion-navbar>\n   \n    <ion-title>\n    Publicar Aviso\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n\n<!-- PUBLICAR AVISO  -->\n<div class="container">\n\n  <div class="row">\n    <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-xs-12">\n\n      <h3> Datos Personles </h3>\n      <hr>\n\n    <!-- NOMBRE Y APP-->\n    <div class="row">\n      <div class="col-xs-6">\n        <small>Nombre</small>\n        <input type="text" class="form-control">\n      </div>\n      <div class="col-xs-6">\n        <small>Apellidos</small>\n        <input type="text" class="form-control">\n      </div>\n    </div>\n\n    <!-- CI Y Lugar Nac-->\n    <div class="row">\n      <div class="col-xs-6">\n        <small>Carnet de identidad</small>\n        <input type="text" class="form-control">\n      </div>\n      <div class="col-xs-6">\n        <small>Expedido en</small>\n        <input type="text" class="form-control">\n      </div>\n    </div>\n\n    <!-- Celular y Ciudad-->\n    <div class="row">\n      <div class="col-xs-5">\n        <small>Nro de Celular</small>\n        <input type="text" class="form-control">\n      </div>\n      <div class="col-xs-7">\n        <small>Ciudad de Recidencia</small>\n        <input type="text" class="form-control">\n      </div>\n    </div>\n\n    <!-- Direccion-->\n    <div class="row">\n      <div class="col-xs-12">\n        <small>Direccion</small>\n        <input type="text" class="form-control">\n      </div>\n    </div>\n\n    <hr>\n    <!-- Requiero, Modalidad, Sueldo-->\n    <div class="row">\n      <div class="col-xs-6">\n        <small>Personal Requerido</small>\n        <select name="requerido" id="requerido" class="form-control">\n          <option value="-1">-- Requiero --</option>\n          <option value="0">Trabajadora De hogar</option>\n          <option value="1">Jardinero </option>\n          <option value="2"> Cosinera </option>\n          <option value="3"> Limpieza </option>\n        </select>\n      </div>\n      <div class="col-xs-6">\n        <small>Modalida</small>\n        <select name="" id="" class="form-control">\n          <option value="-1">-- Modalidad --</option>\n          <option value="0">Cama Adentro</option>\n          <option value="1">Cama Afuera</option>\n\n        </select>\n      </div>\n\n    </div>\n\n\n    <!-- Pasaje, Inicio, Fin-->\n    <div class="row">\n      <div class="col-xs-4">\n        <small>Ini. Jornada</small>\n        <input type="text" class="form-control">\n      </div>\n      <div class="col-xs-4">\n        <small>Fin Jornada</small>\n        <input type="text" class="form-control">\n      </div>\n      <div class="col-xs-4">\n        <small>Sueldo</small>\n        <input type="text" class="form-control">\n      </div>\n    </div>\n\n    <!-- Dia y horade salida-->\n    <div class="row">\n      <div class="col-xs-12">\n        <small>Dia y Hora de salida el fin de semana</small>\n        <input type="text" class="form-control">\n      </div>\n    </div>\n\n\n\n    <!-- Descripcion del Trabajo-->\n    <div class="row">\n      <div class="col-xs-12">\n        <small>Descripcion</small>\n        <textarea rows="3" class="form-control">           \n            </textarea>\n      </div>\n    </div>\n\n    <hr>\n\n    <!-- Terminos y Publicacion-->\n\n    <div class="row">\n      <div class="col-xs-12" align="center">\n        <small>Al hacer click aceptas los Terminos y Condiciones</small>\n        <br>\n        <label>\n          <input type="checkbox" value="ok" checked>Si estoy de Acuerdo </label>\n      </div>\n    </div>\n\n    <br>\n    <div class="row">\n      <div class="col-xs-12" align="center">\n        <button ion-button round (click)=" presentModal()">Publicar Aviso Gratis</button>\n        <br>\n        <button color="warning" ion-button round (click)=" presentModal()"> Publicar Aviso de Pago</button>\n      </div>\n    </div>\n    <br>\n \n\n</div>\n<!-- SUBIR PERFIL -->\n\n</div>\n</div>\n<br><br>\n</ion-content>'/*ion-inline-end:"C:\io\ionic_mihogar\src\final2\src\pages\cliente\public-aviso\public-aviso.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], PublicAvisoPage);
    return PublicAvisoPage;
}());

//# sourceMappingURL=public-aviso.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataProvider = (function () {
    function DataProvider() {
        console.log('Hello DataProvider Provider');
    }
    DataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DataProvider);
    return DataProvider;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cuenta1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editar1_editar1__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Cuenta1Page = (function () {
    function Cuenta1Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Cuenta1Page.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad Cuenta1Page');
    };
    Cuenta1Page.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Cuenta1Page.prototype.irEditar = function () {
        //push another page onto the history stack
        //causing the nav controller to animate the new page in
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__editar1_editar1__["a" /* Editar1Page */]);
    };
    Cuenta1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cuenta1',template:/*ion-inline-start:"C:\io\ionic_mihogar\src\final2\src\pages\candidato\cuenta1\cuenta1.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mi Cuenta</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="container">\n<div class="row">\n  <div class="col-sm-5 col-xs-12">\n    <!-- DIV PERFIL -->\n      <h3 style="color:darkgrey">Datos Personales</h3>\n      <hr>\n    <div class="row">\n      <div class="col-xs-12" align="center">\n        <img src="assets/imgs/perfil.jpg" alt="perfil" width="150">\n        <br>\n        <h3>Nombres y Apellidos del usuario</h3>\n        <p>Nro. Celular:-............. - Nro. CI:-.............</p>\n      </div>\n    </div>\n      \n    <div class="row">\n        <div class="col-xs-12" >\n          <button ion-button round (click)="irEditar()">Editar Datos</button>\n        </div>\n      </div>\n    <!-- DIV PERFIL -->\n  </div>\n\n\n  <div class="col-sm-6 col-xs-12">\n  <!-- DIV HISTORIAL DE POSTULACIONES -->\n\n  <h3 style="color:darkgrey">Mis Postulaciones</h3>\n  <hr>\n  <ion-list>\n    <ion-item>\n      <p align="right">\n        <small>Fecha: 06/03/2018</small>\n      </p>\n      <h3>Postulación a: </h3>\n      <h2> Trabajadora del Hogar, Tipo: Enviado</h2>\n    </ion-item>\n    <ion-item>\n      <p align="right">\n        <small>Fecha: 06/03/2018</small>\n      </p>\n      <h3>Postulación a: </h3>\n      <h2> Trabajadora del Hogar, Tipo: Recibido</h2>\n    </ion-item>\n  \n    <ion-item>\n      <p align="right">\n        <small>Fecha: 06/03/2018</small>\n      </p>\n      <h3>Postulación a: </h3>\n      <h2> Trabajadora del Hogar, Tipo: Enviado</h2>\n    </ion-item>\n  \n    <ion-item>\n      <p align="right">\n        <small>Fecha: 06/03/2018</small>\n      </p>\n      <h3>Postulación a: </h3>\n      <h2> Trabajadora del Hogar, Tipo: Recibido</h2>\n    </ion-item>\n  </ion-list>\n  <!-- DIV HISTORIAL DE POSTULACIONES -->\n  </div>\n</div>\n\n</div>\n\n\n</ion-content>'/*ion-inline-end:"C:\io\ionic_mihogar\src\final2\src\pages\candidato\cuenta1\cuenta1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], Cuenta1Page);
    return Cuenta1Page;
}());

//# sourceMappingURL=cuenta1.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Inicio1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cliente_tab2_tab2__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Inicio1Page = (function () {
    function Inicio1Page(data, app, navCtrl, modal, actionSheetCtrl, alertCtrl) {
        this.data = data;
        this.app = app;
        this.navCtrl = navCtrl;
        this.modal = modal;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
    }
    Inicio1Page.prototype.openPublicar = function () {
        //this.navCtrl.push(AboutPage);
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__cliente_tab2_tab2__["a" /* Tab2Page */]);
        //this.app.getRootNavById();
        //this.navCtrl.setRoot(Tab2Page);
    };
    Inicio1Page.prototype.buscarEmpleo = function (jobsFiltro) {
        this.data.paramData = jobsFiltro;
        this.navCtrl.parent.select(1);
    };
    Inicio1Page.prototype.selectTrabajos = function (jobsFiltro) {
        console.log(jobsFiltro);
        this.data.paramData = jobsFiltro;
    };
    Inicio1Page.prototype.addAtajo = function () {
        var alert = this.alertCtrl.create({
            title: 'Atajo a Escritorio',
            subTitle: 'Sabes que puedes añadir esta pagina web a tu escritorio principal para asi usarla como una aplicación movil,' +
                'y recibirla notificaciones directo a tu celular',
            buttons: ['Ok']
        });
        alert.present();
        /* let actionSheet = this.actionSheetCtrl.create({
           title: 'Titulo Ayuda',
           buttons: [
             {
               text: 'Destructive',
               role: 'destructive',
               handler: () => {
                 console.log('Destructive clicked');
               }
             }, {
               text: 'Archive',
               handler: () => {
                 console.log('Archive clicked');
               }
             }, {
               text: 'Cancel',
               role: 'cancel',
               handler: () => {
                 console.log('Cancel clicked');
               }
             }
           ]
         });
         actionSheet.present();
     */
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Tabs */])
    ], Inicio1Page.prototype, "tabRef", void 0);
    Inicio1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inicio1',template:/*ion-inline-start:"C:\io\ionic_mihogar\src\final2\src\pages\candidato\inicio1\inicio1.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n\n    <ion-title>\n\n      <button ion-button color="rosa" (click)="addAtajo()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n      \n      <img alt="logo" height="40" src="assets/imgs/logofinal.png">\n\n\n\n    </ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n<!-- BOTONES PUBLICAR Y MODO CANDIDATO-->\n        <!--es color de ellos- background-color: #00465d; -->\n<div  style=" padding-bottom: 6px; padding-top: 7px; " align="right">\n        <!-- <button small ion-button round outline> Buscar Candidato </button> -->\n  <button small ion-button round (click)="openPublicar()"> Modo Empleador </button>\n</div>\n<!-- BOTONES PUBLICAR Y MODO CANDIDATO-->\n\n\n<div>\n\n\n  <div class="row">\n    <div class="col-xs-12 col-sm-8">\n<!-- div portada-->\n<div class="card-background-page">\n  <ion-card>\n    <img src="http://consecomercio.org/site/media/k2/items/cache/621af29360685f88fae4c26f96ed9d8c_XL.jpg" />\n\n    <div class="bg-blanco" style="background: rgba(255,255,255,.6);">\n\n      <div class="card-subtitle bg-blanco">\n        <div style="padding-left: 15px; padding-right: 15px;" >\n          <ion-grid>\n            <ion-row>\n              <ion-col col-12>\n    <!-- <ion-label floating>Username</ion-label>-->\n    <ion-list>\n      <ion-item style=" padding-right: 0px !important;\n                              border: 1px solid #dedede !important;">\n        <ion-label>Busco Trabajo de..</ion-label>\n          <ion-select [(ngModel)]="jobsFiltro" multiple="true" (ionChange)="selectTrabajos($event)" cancelText="Cancelar" okText="Agregar">\n            <ion-option value="Jardinero">Jardinero</ion-option>\n            <ion-option value="Niñera">Niñera</ion-option>\n            <ion-option value="Trabajadora del Hogar">Trabajadora del Hogar</ion-option>\n            <ion-option value="Limpieza">Limpieza</ion-option>\n         </ion-select>\n        </ion-item>\n      </ion-list>\n\n              </ion-col>\n\n\n\n            </ion-row>\n\n            <ion-row>\n              <ion-col col-6>\n                      <select [(ngModel)]="modalidad" class="form-control">\n                        <option value="-1">- Cualquier Modalidad -</option>\n                        <option value="Cama Adentro">Cama Adentro</option>\n                        <option value="Cama Afuera">Cama Afuera</option>\n                        <option value="Por día">Por día</option>\n                        <option value="Fin de Semana">Fin de Semana</option>\n                      \n                      </select>\n\n              </ion-col>\n              <ion-col col-6>\n                <select [(ngModel)]="ciudad" class="form-control">\n                  <option value="-1" disabled>-Cualquier Ciudad -</option>\n                  <option value="Santa Cruz">Santa Cruz</option>\n                  <option value="Cochabamba">Cochabamba</option>\n                  <option value="La Paz">La Paz</option>\n                  <option value="Tarija">Tarija</option>\n                </select>\n\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12>\n                <!-- <button ion-button round outline>Buscar Empleo</button>                      -->\n\n                <button ion-button round (click)="buscarEmpleo(jobsFiltro)">Buscar Empleo</button>\n                  <br>\n                  <p> Busco trabajo de: {{jobsFiltro}}  </p> \n                  <p> Modalidad: {{modalidad}} </p>\n                  <p> Ciudad: {{ciudad}} </p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </div>\n    </div>\n  </ion-card>\n</div>\n\n<!--div portada-->\n    </div>\n\n    <div class=" hidden-xs visible-sm visible-md visible-lg col-sm-4"  >\n   VISIBLE MD-4 PARA ESPACIO PUBLICITARIO <br>     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae perferendis quae laborum unde repudiandae fuga et id neque, quas in provident omnis soluta nam quis adipisci fugiat animi. Et, blanditiis?\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n<!-- DIV CONTAINER -->\n\n<div class="container">\n\n  <div class="container">\n    <h3 align="center"> COMO FUNCIONA MIHOGAR PARA TI </h3>\n    <br>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-12 col-md-4 align="center">\n          <div align="center">\n            <img src="assets/imgs/search.png" alt="icono" width="80" class="img img-circle">\n          </div>\n          <h4 style="color:darkgrey"> BUSCA Y RECIBE TRABAJOS </h4>\n          Tenemos más de 5 millones de ellos, así que tienes muchas opciones. Además, le enviaremos una alerta cuando se publique una\n          buena opción para usted.\n\n        </ion-col>\n        <ion-col col-12 col-md-4 align="center">\n          <div align="center">\n            <img src="http://www.eoi.es/blogs/mintecon/files/2015/03/descarga1.jpg" alt="icono" width="80" class="img img-circle">\n          </div>\n          <h4 style="color:darkgrey">SER DESCUBIERTO </h4>\n          Cree una cuenta y cargue su currículum para ser encontrado por los reclutadores que buscan las bases de datos de Mi Hogar\n          todos los días.\n        </ion-col>\n\n        <ion-col col-12 col-md-4 align="center">\n          <div align="center">\n            <img src="http://revistafibra.info/wp-content/uploads/2017/05/1495184132_387983_1495184534_noticia_normal.jpg" alt="icono"\n              width="80" height="67" class="img img-circle">\n          </div>\n          <h4 style="color:darkgrey">RECIBE NOTIFICACIONES </h4>\n          Te cubrimos. Nuestro asesoramiento profesional, servicios de currículum vitae y socios educativos le dan una ventaja en la\n          búsqueda de empleo.\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n\n    <div align="center">\n\n      <h3>Quienes Somos !</h3>\n      <p>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis magni nobis repudiandae quidem incidunt enim quis voluptate\n        dicta aliquam esse deleniti quo saepe, atque aperiam. Nihil est quo unde.\n      </p>\n      <br>\n      <br>\n    </div>\n\n  </div>\n\n\n  <!-- BOTONES -->\n  <div>\n\n\n    <!-- ADD A PANTALLA PRINCIPAL -->\n    <button disabled ion-button icon-only (click)="openModalAdd(1)">\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n\n\n    <!-- Float the icon left -->\n    <button disabled ion-button icon-left (click)="openModalAdd(2)">\n      <ion-icon name="home"></ion-icon>\n      Terminos y Condiciones\n    </button>\n\n\n\n\n\n\n\n\n\n\n\n\n  </div>\n  <br>\n  <br>\n  <!-- BOTONES -->\n\n\n\n</div>\n<!-- END DIV CONTAINER-->\n\n\n\n\n\n<ion-fab bottom right>\n  <button ion-fab color="rosa">\n    <ion-icon name="help"></ion-icon>\n  </button>\n  <ion-fab-list side="top">\n    <button ion-fab>\n      <ion-icon name="home"></ion-icon>\n      <ion-label>Menu de Inicio</ion-label>\n    </button>\n        \n    <button ion-fab>\n          <ion-icon name="search"></ion-icon>\n          <ion-label>Buscar empleos</ion-label>\n    </button>\n\n        <button ion-fab>\n          <ion-icon name="notifications"></ion-icon>\n          <ion-label>Alertas de trabajo</ion-label>\n        </button>\n\n            <button ion-fab>\n              <ion-icon name="person"></ion-icon>\n              <ion-label>Su cuenta</ion-label>\n            </button>\n\n\n  </ion-fab-list>\n</ion-fab>\n<!--\n<ion-fab right bottom>\n  <button ion-fab >\n    <ion-icon name="help"></ion-icon>\n  </button>\n  <ion-fab-list side="top">\n    <button ion-fab>\n      <ion-icon name="logo-facebook"></ion-icon>\n    </button>\n\n    <button ion-fab>\n      <ion-icon name="logo-twitter"></ion-icon>\n    </button>\n    <button ion-fab>\n      <ion-icon name="logo-vimeo"></ion-icon>\n    </button>\n    <button ion-fab>\n      <ion-icon name="logo-googleplus"></ion-icon>\n    </button>\n  </ion-fab-list>\n</ion-fab>\n-->\n\n</ion-content>'/*ion-inline-end:"C:\io\ionic_mihogar\src\final2\src\pages\candidato\inicio1\inicio1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], Inicio1Page);
    return Inicio1Page;
}());

//# sourceMappingURL=inicio1.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio2_inicio2__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buscar2_buscar2__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alerta2_alerta2__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__before_cuenta2_before_cuenta2__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Tab2Page = (function () {
    function Tab2Page(app, menu, navCtrl, navParams) {
        this.app = app;
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tabInicio2 = __WEBPACK_IMPORTED_MODULE_2__inicio2_inicio2__["a" /* Inicio2Page */];
        this.tabBuscar2 = __WEBPACK_IMPORTED_MODULE_3__buscar2_buscar2__["a" /* Buscar2Page */];
        this.tabAvisos2 = __WEBPACK_IMPORTED_MODULE_4__alerta2_alerta2__["a" /* Alerta2Page */];
        this.tabCuenta2 = __WEBPACK_IMPORTED_MODULE_5__before_cuenta2_before_cuenta2__["a" /* BeforeCuenta2Page */];
        //  this.menu._setActiveMenu(nav2c);
        //this.app.getActiveNav();
        this.navCtrl = this.app.getActiveNav();
        //this.navCtrl.setRoot(this.nav2c);
        //this.menu.enable(true, 'nav2');
        //console.log(this.navCtrl.getAllChildNavs());
        // this.navCtrl = this.app.getRootNav();
        //this.app.getRootNav()
    }
    Tab2Page.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad Tab2Page');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('nav2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */])
    ], Tab2Page.prototype, "nav2c", void 0);
    Tab2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tab2',template:/*ion-inline-start:"C:\io\ionic_mihogar\src\final2\src\pages\cliente\tab2\tab2.html"*/'<ion-menu id="nav2" [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu  Empleador</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button ion-item (click)="openPage(1)">\n        Inicio\n      </button>\n      <button ion-item (click)="openPage(2)">\n        Publicar Aviso\n      </button>\n      <button ion-item (click)="openPage(3)">\n        Mi Cuenta\n      </button>\n      <button ion-item (click)="openPage(4)">\n        Terminos & Condiciones\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu> \n\n\n<ion-nav  #content [root]="rootPage"></ion-nav>\n\n<!--color="fprimary"-->\n<ion-tabs  tabsPlacement="top" >\n\n  <ion-tab [root]="tabInicio2" tabTitle="Inicio" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tabBuscar2" tabTitle="Candidatos" tabIcon="search"></ion-tab>\n  <ion-tab [root]="tabAvisos2" tabTitle="Avisos" tabIcon="notifications"></ion-tab>\n  <ion-tab [root]="tabCuenta2" tabTitle="Mi Cuenta" tabIcon="person"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"C:\io\ionic_mihogar\src\final2\src\pages\cliente\tab2\tab2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], Tab2Page);
    return Tab2Page;
}());

//# sourceMappingURL=tab2.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Inicio2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__candidato_tab1_tab1__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__public_aviso_public_aviso__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Inicio2Page = (function () {
    function Inicio2Page(app, navCtrl, modal, actionSheetCtrl, alertCtrl) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.modal = modal;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
    }
    Inicio2Page.prototype.buscarEmpleo = function () {
        // this.navCtrl.push(AboutPage);
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__candidato_tab1_tab1__["a" /* Tab1Page */]);
        /*
        //constantes de login
        const root=this.app.getRootNav();
        root.popToRoot();
     */
    };
    Inicio2Page.prototype.openPublicar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__public_aviso_public_aviso__["a" /* PublicAvisoPage */]);
    };
    Inicio2Page.prototype.addAtajo = function () {
        var alert = this.alertCtrl.create({
            title: 'Atajo a Escritorio',
            subTitle: 'Sabes que puedes añadir esta pagina web a tu escritorio principal para asi usarla como una aplicación movil,' +
                'y recibirla notificaciones directo a tu celular',
            buttons: ['Ok']
        });
        alert.present();
        /* let actionSheet = this.actionSheetCtrl.create({
           title: 'Titulo Ayuda',
           buttons: [
             {
               text: 'Destructive',
               role: 'destructive',
               handler: () => {
                 console.log('Destructive clicked');
               }
             }, {
               text: 'Archive',
               handler: () => {
                 console.log('Archive clicked');
               }
             }, {
               text: 'Cancel',
               role: 'cancel',
               handler: () => {
                 console.log('Cancel clicked');
               }
             }
           ]
         });
         actionSheet.present();
     */
    };
    Inicio2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inicio2',template:/*ion-inline-start:"C:\io\ionic_mihogar\src\final2\src\pages\cliente\inicio2\inicio2.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <img alt="logo" height="40" src="assets/imgs/logofinal.png">\n\n\n      <button ion-button color="rosa" (click)="addAtajo()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n\n      <!--\n              <button  ion-button small outline  icon-left>\n              <ion-icon name="add"></ion-icon>\n              A Escritorio\n            </button>\n-->\n    </ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!-- BOTONES PUBLICAR Y MODO CANDIDATO (para cel)-->   \n  <div class="visible-xs hidden-sm hidden-md hidden-lg"\n   style=" background-color: #f4f4f4; padding-bottom: 6px; padding-top: 7px;" \n   align="center">\n    <button small ion-button round outline (click)="buscarEmpleo()" > Modo Candidato </button>   \n      <button small ion-button round (click)="openPublicar()"> Publicar Aviso </button>\n  </div>\n<!-- BOTONES PUBLICAR Y MODO CANDIDATO-->\n\n\n\n<!-- div portada-->\n<div>\n  <div class="row">\n    <div class="col-xs-12 col-sm-8">\n\n  <div class="card-background-page">\n    <ion-card>\n      <img src="http://consecomercio.org/site/media/k2/items/cache/621af29360685f88fae4c26f96ed9d8c_XL.jpg" />\n\n      <div class="bg-blanco" style="background: rgba(255,255,255,.6);">\n\n        <div class="card-subtitle bg-blanco">\n          <div style="padding-left: 15px; padding-right: 15px;" >\n            <ion-grid>\n              <ion-row>\n                <ion-col col-12>\n\n                  <select name="requiereP" id="requiereP" class="form-control">\n                    <option value="-1" disabled>-- Requiero Personal de --</option>\n                    <option value="0">Jardinero</option>\n                    <option value="1">Niñera</option>\n                    <option value="2">Trabajadora de Hogar</option>\n                    <option value="3">Limpieza</option>\n                  </select>\n\n                </ion-col>\n\n\n\n              </ion-row>\n\n              <ion-row>\n                <ion-col col-6>\n\n                  <select name="modalidad" id="modalidad" class="form-control">\n                    <option value="-1" disabled>- Modalidad -</option>\n                    <option value="0">Cama Adentro</option>\n                    <option value="1">Cama Adentro</option>\n                    <option value="2">Cama Adentro</option>\n                    <option value="3">Cama Adentro</option>\n                    <option value="4">Cama Adentro</option>\n                  </select>\n\n                </ion-col>\n                <ion-col col-6>\n                  <select name="ciudad" id="ciudad" class="form-control">\n                    <option value="-1" disabled>- Ciudad -</option>\n                    <option value="0">Santa Cruz</option>\n                    <option value="1">Cochabamba</option>\n                    <option value="3">La Paz</option>\n                    <option value="2">Tarija</option>\n                  </select>\n\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-12>\n                  <!-- <button ion-button round outline>Buscar Empleo</button>                      -->\n\n                  <button ion-button round>Buscar Personal</button>\n\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n        </div>\n      </div>\n    </ion-card>\n  </div>\n\n\n    </div>\n\n    <div class=" hidden-xs visible-sm visible-md visible-lg col-sm-4">\n    <!-- BOTONES PUBLICAR Y MODO CANDIDATO-->\n    <div style=" background-color: #f4f4f4; padding-bottom: 6px; padding-top: 7px;" align="center">\n      <button   ion-button round outline (click)="buscarEmpleo()"> Modo Candidato </button>\n      <button  ion-button round (click)="openPublicar()"> Publicar Aviso </button>\n    </div>\n    <!-- BOTONES PUBLICAR Y MODO CANDIDATO-->\n\n    <br><br>\n      VISIBLE MD-4 PARA ESPACIO PUBLICITARIO\n      <br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae perferendis quae laborum unde repudiandae fuga et id\n      neque, quas in provident omnis soluta nam quis adipisci fugiat animi. Et, blanditiis?\n    </div>\n    </div>\n    </div>\n\n<!-- div portada-->\n\n\n\n\n\n  <!-- DIV CONTAINER -->\n\n  <div class="container">\n\n    <div class="container">\n      <h3 align="center"> COMO FUNCIONA MIHOGAR PARA TI </h3>\n      <br>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-12 col-md-4 align="center">\n            <div align="center">\n              <img src="assets/imgs/search.png" alt="icono" width="80" class="img img-circle">\n            </div>\n            <h4 style="color:darkgrey"> BUSCA Y RECIBE TRABAJOS </h4>\n            Tenemos más de 5 millones de ellos, así que tienes muchas opciones. Además, le enviaremos una alerta cuando se publique una\n            buena opción para usted.\n\n          </ion-col>\n          <ion-col col-12 col-md-4 align="center">\n            <div align="center">\n              <img src="http://www.eoi.es/blogs/mintecon/files/2015/03/descarga1.jpg" alt="icono" width="80" class="img img-circle">\n            </div>\n            <h4 style="color:darkgrey">SER DESCUBIERTO </h4>\n            Cree una cuenta y cargue su currículum para ser encontrado por los reclutadores que buscan las bases de datos de Mi Hogar\n            todos los días.\n          </ion-col>\n\n          <ion-col col-12 col-md-4 align="center">\n            <div align="center">\n              <img src="http://revistafibra.info/wp-content/uploads/2017/05/1495184132_387983_1495184534_noticia_normal.jpg" alt="icono"\n                width="80" height="67" class="img img-circle">\n            </div>\n            <h4 style="color:darkgrey">RECIBE NOTIFICACIONES </h4>\n            Te cubrimos. Nuestro asesoramiento profesional, servicios de currículum vitae y socios educativos le dan una ventaja en la\n            búsqueda de empleo.\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n\n      <div align="center">\n\n        <h3>Quienes Somos !</h3>\n        <p>\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis magni nobis repudiandae quidem incidunt enim quis voluptate\n          dicta aliquam esse deleniti quo saepe, atque aperiam. Nihil est quo unde.\n        </p>\n        <br>\n        <br>\n      </div>\n\n    </div>\n\n\n    <!-- BOTONES -->\n    <div>\n\n\n      <!-- ADD A PANTALLA PRINCIPAL -->\n      <button disabled ion-button icon-only (click)="openModalAdd(1)">\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n\n\n      <!-- Float the icon left -->\n      <button disabled ion-button icon-left (click)="openModalAdd(2)">\n        <ion-icon name="home"></ion-icon>\n        Terminos y Condiciones\n      </button>\n\n\n\n\n\n\n\n\n\n\n\n\n    </div>\n    <br>\n    <br>\n    <!-- BOTONES -->\n\n\n\n  </div>\n  <!-- END DIV CONTAINER-->\n\n\n</ion-content>'/*ion-inline-end:"C:\io\ionic_mihogar\src\final2\src\pages\cliente\inicio2\inicio2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], Inicio2Page);
    return Inicio2Page;
}());

//# sourceMappingURL=inicio2.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeforePublicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeforePublicPage = (function () {
    function BeforePublicPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BeforePublicPage.prototype.ionViewDidLoad = function () {
        //  console.log('ionViewDidLoad BeforePublicPage');
    };
    BeforePublicPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    BeforePublicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-before-public',template:/*ion-inline-start:"C:\io\ionic_mihogar\src\final2\src\pages\cliente\before-public\before-public.html"*/'\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Publicar Aviso\n\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h3 style="text-align: center">Vista Previa</h3>\n  Empleador:\n  <br> Telefono :\n  <br> Direccion :\n  <br> Direccion Actual :\n  <br> Personal Requerido:\n  <br> Modalidad:\n  <br> Sueldo:\n  <br> Inicio Jornada: ---- Fin Jornada:\n  <br> Descripcion del Trabajo: ---------------------\n  <br> ---------------------\n  <br> ---------------------\n  <br> ---------------------\n\n  <hr>\n  <button color="warning" icon-left ion-button round ion-button (click)="goBack()">\n    <!--   <ion-icon name="create"></ion-icon> -->\n    <ion-icon name="hammer"></ion-icon>\n    Modificar\n  </button>\n\n  <button icon-left ion-button round ion-button (click)="goBack()">\n    <!--   <ion-icon name="create"></ion-icon> -->\n    <ion-icon name="home"></ion-icon>\n    Publicar\n  </button>\n\n</ion-content>'/*ion-inline-end:"C:\io\ionic_mihogar\src\final2\src\pages\cliente\before-public\before-public.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], BeforePublicPage);
    return BeforePublicPage;
}());

//# sourceMappingURL=before-public.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Buscar2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pago2_pago2__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Buscar2Page = (function () {
    function Buscar2Page(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.check = false;
    }
    Buscar2Page.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad CandidatosPage');
    };
    Buscar2Page.prototype.comprar = function (c) {
        //alert("ENVIA AL FORMULARIO DE COMPRA DE PERFILES");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pago2_pago2__["a" /* Pago2Page */]);
    };
    Buscar2Page.prototype.updateCheck = function () {
        var msj = 'Se Añadio a la Lista para descargar';
        if (!this.check) {
            msj = 'Se Quito de la Lista';
        }
        var toast = this.toastCtrl.create({
            message: msj,
            duration: 1000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    Buscar2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buscar2',template:/*ion-inline-start:"C:\io\ionic_mihogar\src\final2\src\pages\cliente\buscar2\buscar2.html"*/'<ion-header>\n\n    <ion-navbar>\n    \n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>\n        <button ion-button color="rosa" (click)="addAtajo()">\n          <ion-icon name="add"></ion-icon>\n        </button>\n        <img alt="logo" height="40" src="assets/imgs/logofinal.png">\n      </ion-title>\n    \n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <!--FABS -->\n  <ion-fab right bottom>\n\n    <button ion-fab color="primary" (click)="comprar(10)">\n\n      <ion-icon name="download"></ion-icon>\n    </button>\n    <ion-badge bottom style="background-color: #187cff">\n      Descargar</ion-badge>\n\n    <!-- <ion-fab-list side="left">\n        <button ion-button color="naranja">¿ Descargar Perfiles ?</button>        \n      </ion-fab-list>\n    -->\n\n  </ion-fab>\n  <!-- FABS -->\n\n\n\n<div class="row">\n  <div class="col-md-3 col-xs-12" style="background-color: #f5f5f5">\n\n  <!-- buscar -->\n  <div style="padding-left: 3%; padding-right: 3%;">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-12>\n\n          <!-- <ion-label floating>Username</ion-label>-->\n          <ion-list>\n            <ion-item style=" padding-right: 0px !important;\n                    border: 1px solid #dedede !important;">\n              <ion-label>Busco Trabajo de..</ion-label>\n              <ion-select [(ngModel)]="toppings" multiple="false" cancelText="Cancelar" okText="Agregar">\n                <ion-option value="bacon">Jardinero</ion-option>\n                <ion-option value="olives">Niñera</ion-option>\n                <ion-option value="xcheese">Trabajadora del Hogar</ion-option>\n                <ion-option value="peppers">Limpieza</ion-option>\n                <ion-option value="mushrooms">Mushrooms</ion-option>\n                <ion-option value="onions">Onions</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-list>\n\n          <!-- \n                \n                <ion-searchbar></ion-searchbar>\n               -->\n        </ion-col>\n\n\n\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-6>\n\n          <select name="modalidad" id="modalidad" class="form-control">\n            <option value="-1" disabled>- Modalidad -</option>\n            <option value="0">Cama Adentro</option>\n            <option value="1">Cama Adentro</option>\n            <option value="2">Cama Adentro</option>\n            <option value="3">Cama Adentro</option>\n            <option value="4">Cama Adentro</option>\n          </select>\n\n        </ion-col>\n        <ion-col col-6>\n          <select name="ciudad" id="ciudad" class="form-control">\n            <option value="-1" disabled>- Ciudad -</option>\n            <option value="0">Santa Cruz</option>\n            <option value="1">Cochabamba</option>\n            <option value="3">La Paz</option>\n            <option value="2">Tarija</option>\n          </select>\n\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12>\n          <div align="center">\n\n            <!--              <button ion-button  outline >Nueva Busqueda</button>                                   -->\n            <button ion-button>Buscar Perfil</button>\n          </div>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n\n</div>\n  <!-- buscar -->\n\n  <hr>\n  <!-- DIV BUSCAR -->\n  <div class="col-md-7 col-xs-12">\n    <div style="padding-left: 3%; padding-right: 3%;">\n\n  <ion-list>\n    <!-- ITEM 1 -->\n    <ion-card>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="https://www.websa100.com/wp-content/uploads/2016/05/foto-de-perfil-adecuada.jpg">\n        </ion-thumbnail>\n        <p>\n          <small>\n            <b> Edad </b>\n          </small>\n          20 años\n        </p>\n\n        <p>\n          <small>\n            <B> Lugar de Nacimiento:</B>\n          </small>\n          <br>Santa Cruz </p>\n\n\n      </ion-item>\n\n\n      <ion-card-content>\n        <ion-card-title>\n          Gilda Vannesa\n        </ion-card-title>\n        <p>\n          <small>\n            <b> Busca Trabajo de : </b>\n          </small>\n          <br> Wait a minute. Wait a minute, Doc. Uhhh...\n          <br>\n          <small>\n            <b> Modalidad: </b>\n          </small>\n          .................................\n          <br>\n          <small>\n            <b>Sueldo :</b>\n          </small>\n          .................................\n        </p>\n        <hr>\n        <!--EXPERIENCIA LABORALES -->\n        <p>\n          EXPERIENCIA LABORAL\n          <br>\n\n          <small>\n            <b> Cargo desempeñado: </b>\n          </small>\n          .................................\n          <br>\n\n          <small>\n            <b> Tiempo Trabajado </b>\n          </small>\n          .................................\n          <br>\n          <small>\n            <b> Fecha de Retiro </b>\n          </small>\n          .................................\n          <br>\n          <small>\n            <b> Motivo de Retiro </b>\n          </small>\n          .................................\n          <br>\n        </p>\n        <!--EXPERIENCIA LABORALES -->\n\n\n      </ion-card-content>\n\n      <ion-row>\n        <ion-col col-12 align="center">\n          <ion-item>\n            <ion-label style="color:#488aff"> SELECIONAR PERFIL</ion-label>\n            <ion-checkbox [(ngModel)]="check" (ionChange)="updateCheck()" color="primary" checked="false"></ion-checkbox>\n          </ion-item>\n\n\n          <!--\n          <button ion-button icon-left clear small>\n            <ion-icon name="thumbs-up"></ion-icon>\n            Seleccionar Perfil\n          </button>\n        -->\n\n        </ion-col>\n      </ion-row>\n    </ion-card>\n    <!-- ITEM 1 -->\n\n\n\n    <!-- ITEM 2 -->\n    <ion-card>\n      <ion-item>\n        <div align="center">\n          <ion-thumbnail>\n            <img src="https://www.websa100.com/wp-content/uploads/2016/05/foto-de-perfil-adecuada.jpg">\n          </ion-thumbnail>\n        </div>\n      </ion-item>\n\n\n      <ion-card-content>\n        <ion-card-title>\n          Nombre y Apellidos de Usuario\n        </ion-card-title>\n        <p>\n          Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa.\n          This is heavy.\n        </p>\n        <hr>\n        <p>\n          <small> GRUPO FAMILIAR : ADULTOS, NIÑOS\n            <br>\n            <b>SUELDO :</b> - HORARIO :\n          </small>\n        </p>\n      </ion-card-content>\n\n      <ion-row>\n        <ion-col col-12 align="center">\n          <ion-item>\n            <ion-label color="primary">SELECIONAR PERFIL</ion-label>\n            <ion-checkbox color="primary" checked="false"></ion-checkbox>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n    <!-- ITEM 2 -->\n\n\n\n    <!-- ITEM 2 -->\n    <ion-card>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="https://www.websa100.com/wp-content/uploads/2016/05/foto-de-perfil-adecuada.jpg">\n        </ion-thumbnail>\n\n        <h2>SE REQUIERE ......</h2>\n        <p>MODALIDAD:....</p>\n        <p>\n          <small>\n            <b> Santa Cruz - 06/03/2018 </b>\n          </small>\n        </p>\n      </ion-item>\n\n\n      <ion-card-content>\n        <p>DESCRIPCION\n          <br> Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?!\n          Whoa. This is heavy.</p>\n        <br>\n        <p>\n          <small> GRUPO FAMILIAR : ADULTOS, NIÑOS\n            <br>\n            <b>SUELDO :</b> - HORARIO :\n          </small>\n        </p>\n      </ion-card-content>\n\n      <ion-row>\n        <ion-col col-12 align="left">\n          <ion-item>\n            <ion-label color="primary">SELECIONAR PERFIL</ion-label>\n            <ion-checkbox color="primary" checked="false"></ion-checkbox>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n    <!-- ITEM 2 -->\n\n\n\n\n    <!-- ITEM 2 -->\n    <ion-card>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="https://www.websa100.com/wp-content/uploads/2016/05/foto-de-perfil-adecuada.jpg">\n        </ion-thumbnail>\n\n        <h2>SE REQUIERE ......</h2>\n        <p>MODALIDAD:....</p>\n        <p>\n          <small>\n            <b> Santa Cruz - 06/03/2018 </b>\n          </small>\n        </p>\n      </ion-item>\n\n\n      <ion-card-content>\n        <p>DESCRIPCION\n          <br> Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?!\n          Whoa. This is heavy.</p>\n        <br>\n        <p>\n          <small> GRUPO FAMILIAR : ADULTOS, NIÑOS\n            <br>\n            <b>SUELDO :</b> - HORARIO :\n          </small>\n        </p>\n      </ion-card-content>\n\n      <ion-row>\n        <ion-col col-12 align="left">\n          <ion-item>\n            <ion-label color="primary">SELECIONAR PERFIL</ion-label>\n            <ion-checkbox color="primary" checked="false"></ion-checkbox>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n    <!-- ITEM 2 -->\n\n\n\n\n\n\n\n          </ion-list>\n\n      </div>\n  \n  <!-- END LISTADO DE TRABAJOS -->\n  </div>\n  \n  <div class="col-md-2 hidden-xs hidden-sm " style="background-color: #f5f5f5">\n    <br> ESPACIO PUBLICITARIO\n    <br>\n    <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus repudiandae ea maiores natus, commodi asperiores\n    aut in consequuntur accusamus deleniti sint, illum quaerat aliquam, ullam veritatis? Facere reprehenderit esse voluptates!</div>\n  </div>\n\n  <br>\n  <br>\n\n\n</ion-content>'/*ion-inline-end:"C:\io\ionic_mihogar\src\final2\src\pages\cliente\buscar2\buscar2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], Buscar2Page);
    return Buscar2Page;
}());

//# sourceMappingURL=buscar2.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pago2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Pago2Page = (function () {
    function Pago2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab = document.querySelector('.tabbar.show-tabbar');
    }
    Pago2Page.prototype.ionViewWillEnter = function () {
        this.tab.style.display = 'none';
    };
    Pago2Page.prototype.ionViewWillLeave = function () {
        this.tab.style.display = 'flex';
    };
    Pago2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Pago2Page');
    };
    Pago2Page.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Pago2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pago2',template:/*ion-inline-start:"C:\io\ionic_mihogar\src\final2\src\pages\cliente\pago2\pago2.html"*/'<ion-content padding>\n<div class="container">\n\n  <div class="row">\n    <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-xs-12">\n\n  <ion-grid>\n    <h3>Datos Personales</h3>\n    <ion-row>\n      <ion-col col-12>\n        <small>Nombre Completo</small>\n        <input type="text" class="form-control">\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12>\n        <small>Dirección 1</small>\n        <input type="text" class="form-control">\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12>\n        <small>Dirección 2</small>\n        <input type="text" class="form-control">\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6>\n        <small>Ciudad</small>\n        <input type="text" class="form-control">\n      </ion-col>\n      <ion-col col-6>\n        <small>Departamento</small>\n        <input type="text" class="form-control">\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6>\n        <small>Carnet ID</small>\n        <input type="text" class="form-control">\n      </ion-col>\n      <ion-col col-6>\n        <small>Telefono</small>\n        <input type="text" class="form-control">\n      </ion-col>\n    </ion-row>\n\n\n    <h3>Datos para la Factura</h3>\n\n    <ion-row>\n      <ion-col col-12>\n        <small>Razon social</small>\n        <input type="text" class="form-control">\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12>\n        <small>Nit</small>\n        <input type="text" class="form-control">\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button color="danger" block (click)="goBack()" >Cancelar</button>\n\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button block>Continuar</button>\n      </ion-col>\n    </ion-row>\n\n\n\n\n  </ion-grid>\n</div>\n</div>\n</div>\n\n</ion-content>'/*ion-inline-end:"C:\io\ionic_mihogar\src\final2\src\pages\cliente\pago2\pago2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], Pago2Page);
    return Pago2Page;
}());

//# sourceMappingURL=pago2.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Alerta2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Alerta2Page = (function () {
    function Alerta2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Alerta2Page.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad AvisosPage');
    };
    Alerta2Page.prototype.comprar = function (c) {
        //alert("ENVIA AL FORMULARIO DE COMPRA DE PERFILES");
        //  this.navCtrl.push(PagoPage);
    };
    Alerta2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alerta2',template:/*ion-inline-start:"C:\io\ionic_mihogar\src\final2\src\pages\cliente\alerta2\alerta2.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Avisos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <!--FABS -->\n  <ion-fab right bottom>\n    <button ion-fab color="primary" (click)="comprar(10)">\n      <ion-icon name="download"></ion-icon>\n    </button>\n    <!-- <ion-fab-list side="left">\n        <button ion-button color="naranja">¿ Descargar Perfiles ?</button>        \n      </ion-fab-list>\n    -->\n\n  </ion-fab>\n  <!-- FABS -->\n<div class="row">\n  <div class="col-md-3 col-xs-12" style="background-color: #f5f5f5">\n\n    <!-- AQUI TIENE QUE IR EL LISTADO DE NOTIFICACIONES DINAMICAMENTE -->\n    <div class="alert alert-warning" align="center">\n      En esta sección podra visualizar a los empleadores interesados por usted\n    </div>\n\n\n  </div>\n\n\n  <!-- DIV LISTADO DE CANDIATOS -->\n<div class="col-md-7 col-xs-12">\n  <ion-list>\n    <!-- ITEM 1 -->\n    <ion-card>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="https://www.websa100.com/wp-content/uploads/2016/05/foto-de-perfil-adecuada.jpg">\n        </ion-thumbnail>\n        <p>\n          <small>\n            <b> Edad </b>\n          </small>\n          20 años\n        </p>\n\n        <p>\n          <small>\n            <B> Lugar de Nacimiento:</B>\n          </small>\n          <br>Santa Cruz </p>\n\n\n      </ion-item>\n\n\n      <ion-card-content>\n        <ion-card-title>\n          Gilda Vannesa\n        </ion-card-title>\n        <p>\n          <small>\n            <b> Busca Trabajo de : </b>\n          </small>\n          <br> Wait a minute. Wait a minute, Doc. Uhhh...\n          <br>\n          <small>\n            <b> Modalidad: </b>\n          </small>\n          .................................\n          <br>\n          <small>\n            <b>Sueldo :</b>\n          </small>\n          .................................\n        </p>\n        <hr>\n        <!--EXPERIENCIA LABORALES -->\n        <p>\n          EXPERIENCIA LABORAL\n          <br>\n\n          <small>\n            <b> Cargo desempeñado: </b>\n          </small>\n          .................................\n          <br>\n\n          <small>\n            <b> Tiempo Trabajado </b>\n          </small>\n          .................................\n          <br>\n          <small>\n            <b> Fecha de Retiro </b>\n          </small>\n          .................................\n          <br>\n          <small>\n            <b> Motivo de Retiro </b>\n          </small>\n          .................................\n          <br>\n        </p>\n        <!--EXPERIENCIA LABORALES -->\n\n\n      </ion-card-content>\n\n      <ion-row>\n        <ion-col col-12 align="right">\n          <button ion-button icon-left clear small>\n            <ion-icon name="thumbs-up"></ion-icon>\n            Seleccionar Perfil\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n    <!-- ITEM 1 -->\n\n\n\n    <!-- ITEM 2 -->\n    <ion-card>\n      <ion-item>\n        <div align="center">\n          <ion-thumbnail>\n            <img src="https://www.websa100.com/wp-content/uploads/2016/05/foto-de-perfil-adecuada.jpg">\n          </ion-thumbnail>\n        </div>\n      </ion-item>\n\n\n      <ion-card-content>\n        <ion-card-title>\n          Nombre y Apellidos de Usuario\n        </ion-card-title>\n        <p>\n          Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa.\n          This is heavy.\n        </p>\n        <hr>\n        <p>\n          <small> GRUPO FAMILIAR : ADULTOS, NIÑOS\n            <br>\n            <b>SUELDO :</b> - HORARIO :\n          </small>\n        </p>\n      </ion-card-content>\n\n      <ion-row>\n        <ion-col col-12 align="right">\n          <button ion-button icon-left clear small>\n            <ion-icon name="thumbs-up"></ion-icon>\n            <div>Seleccionar Perfil</div>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n    <!-- ITEM 2 -->\n\n\n\n    <!-- ITEM 2 -->\n    <ion-card>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="https://www.websa100.com/wp-content/uploads/2016/05/foto-de-perfil-adecuada.jpg">\n        </ion-thumbnail>\n\n        <h2>SE REQUIERE ......</h2>\n        <p>MODALIDAD:....</p>\n        <p>\n          <small>\n            <b> Santa Cruz - 06/03/2018 </b>\n          </small>\n        </p>\n      </ion-item>\n\n\n      <ion-card-content>\n        <p>DESCRIPCION\n          <br> Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?!\n          Whoa. This is heavy.</p>\n        <br>\n        <p>\n          <small> GRUPO FAMILIAR : ADULTOS, NIÑOS\n            <br>\n            <b>SUELDO :</b> - HORARIO :\n          </small>\n        </p>\n      </ion-card-content>\n\n      <ion-row>\n        <ion-col col-12 align="right">\n          <button ion-button icon-left clear small>\n            <ion-icon name="thumbs-up"></ion-icon>\n            <div>Seleccionar Perfil</div>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n    <!-- ITEM 2 -->\n\n\n\n\n    <!-- ITEM 2 -->\n    <ion-card>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="https://www.websa100.com/wp-content/uploads/2016/05/foto-de-perfil-adecuada.jpg">\n        </ion-thumbnail>\n\n        <h2>SE REQUIERE ......</h2>\n        <p>MODALIDAD:....</p>\n        <p>\n          <small>\n            <b> Santa Cruz - 06/03/2018 </b>\n          </small>\n        </p>\n      </ion-item>\n\n\n      <ion-card-content>\n        <p>DESCRIPCION\n          <br> Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?!\n          Whoa. This is heavy.</p>\n        <br>\n        <p>\n          <small> GRUPO FAMILIAR : ADULTOS, NIÑOS\n            <br>\n            <b>SUELDO :</b> - HORARIO :\n          </small>\n        </p>\n      </ion-card-content>\n\n      <ion-row>\n        <ion-col col-12 align="right">\n          <button ion-button icon-left clear small>\n            <ion-icon name="thumbs-up"></ion-icon>\n            <div>Seleccionar Perfil</div>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n    <!-- ITEM 2 -->\n\n  </ion-list>\n</div>\n<!-- DIV LISTADO DE CANDIATOS -->\n\n<div class="col-md-2 hidden-xs hidden-sm " style="background-color: #f5f5f5">\n  <br> ESPACIO PUBLICITARIO\n  <br>\n  <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fugiat suscipit exercitationem dolor eos nam ad rerum\n  sint tenetur quo voluptate esse nesciunt, eius dicta incidunt ab mollitia totam. Fugiat?\n\n</div>\n\n</div>\n\n\n  <br>\n  <br>\n\n\n</ion-content>'/*ion-inline-end:"C:\io\ionic_mihogar\src\final2\src\pages\cliente\alerta2\alerta2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], Alerta2Page);
    return Alerta2Page;
}());

//# sourceMappingURL=alerta2.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeforeCuenta2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login2_login2__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__public_aviso_public_aviso__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { AboutPage } from '../about/about';
//import { LoginPage } from "../login/login";
var BeforeCuenta2Page = (function () {
    function BeforeCuenta2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BeforeCuenta2Page.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad VcuentaPage');
    };
    BeforeCuenta2Page.prototype.openPage = function (sw) {
        if (sw == 1) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login2_login2__["a" /* Login2Page */]);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__public_aviso_public_aviso__["a" /* PublicAvisoPage */]);
        }
    };
    BeforeCuenta2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-before-cuenta2',template:/*ion-inline-start:"C:\io\ionic_mihogar\src\final2\src\pages\cliente\before-cuenta2\before-cuenta2.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"> </ion-icon>\n    </button>\n\n    <ion-title>V. Cuenta</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <div class="row">\n    <div class="col-sm-6 col-sm-offset-3 col-xs-12">\n      <div align="center">\n        <br>\n        <h2>Elige una opción</h2>\n        <br>\n        <br>\n        <button ion-button block (click)="openPage(1)">Iniciar Sesion</button>\n        <button ion-button block color="naranja" (click)="openPage(2)">Publicar Aviso </button>\n\n      </div>\n\n    </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\io\ionic_mihogar\src\final2\src\pages\cliente\before-cuenta2\before-cuenta2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], BeforeCuenta2Page);
    return BeforeCuenta2Page;
}());

//# sourceMappingURL=before-cuenta2.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cuenta2_cuenta2__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Login2Page = (function () {
    function Login2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab = document.querySelector('.tabbar.show-tabbar');
    }
    Login2Page.prototype.ionViewWillEnter = function () {
        this.tab.style.display = 'none';
    };
    Login2Page.prototype.ionViewWillLeave = function () {
        this.tab.style.display = 'flex';
    };
    Login2Page.prototype.ionViewDidLoad = function () {
        //  console.log('ionViewDidLoad Login2Page');
    };
    Login2Page.prototype.ingresar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__cuenta2_cuenta2__["a" /* Cuenta2Page */]);
    };
    Login2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login2',template:/*ion-inline-start:"C:\io\ionic_mihogar\src\final2\src\pages\cliente\login2\login2.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n      <div class="container">\n      \n        <div class="row">\n          <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-xs-12">\n      \n      \n            <ion-card>\n              <ion-card-header>\n                Autentificación\n              </ion-card-header>\n              <ion-card-content>\n                <div class="container">\n                  <div class="row">\n                    <div class="col-xs-12">\n                      <small>Usuario</small>\n                      <input type="text" class="form-control">\n                    </div>\n                  </div>\n      \n                  <div class="row">\n                    <div class="col-xs-12">\n                      <small>Contraseña</small>\n                      <input type="password" class="form-control">\n                    </div>\n                  </div>\n      \n                  <div class="row">\n                    <div class="col-xs-12">\n                      <button ion-button type="submit" (click)="ingresar()">Ingresar</button>\n                    </div>\n                  </div>\n                </div>\n      \n              </ion-card-content>\n            </ion-card>\n      \n      \n      \n          </div>\n        </div>\n      </div>\n</ion-content>'/*ion-inline-end:"C:\io\ionic_mihogar\src\final2\src\pages\cliente\login2\login2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], Login2Page);
    return Login2Page;
}());

//# sourceMappingURL=login2.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cuenta2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editar2_editar2__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Cuenta2Page = (function () {
    function Cuenta2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Cuenta2Page.prototype.ionViewDidLoad = function () {
        //    console.log('ionViewDidLoad Cuenta2Page');
    };
    Cuenta2Page.prototype.openPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__editar2_editar2__["a" /* Editar2Page */]);
    };
    Cuenta2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cuenta2',template:/*ion-inline-start:"C:\io\ionic_mihogar\src\final2\src\pages\cliente\cuenta2\cuenta2.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Cuenta\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="container">\n    <!--container-->\n<div class="row">\n  <div class="col-sm-5 col-xs-12">\n    <!-- DIV PERFIL -->\n    <h3 style="color:darkgrey">Datos Personales</h3>\n    <hr>\n\n    <h3>Datos Personales</h3>\n\n    <!--nombre y app-->\n    <ion-grid>\n      <ion-row>\n        <ion-col col-12>\n          <small>Nombre y Apellidos</small>\n          <p>NOMBRE COMPLETO DEL USUARIO</p>\n        </ion-col>\n      </ion-row>\n\n\n      <!--Expedido en, nro cel, carnet de id-->\n      <ion-row>\n        <ion-col col-4>\n          <small>Expedido en </small>\n          SANTA CRUZ\n        </ion-col>\n        <ion-col col-4>\n          <small>Nro. Celular</small>\n          79056658\n        </ion-col>\n        <ion-col col-4>\n          <small>Carnet ID</small>\n          9056315\n        </ion-col>\n      </ion-row>\n\n\n\n      <!--Direccion-->\n      <ion-row>\n        <ion-col col-12>\n          <small>Direccion</small>\n          <p>.............................................</p>\n        </ion-col>\n      </ion-row>\n\n      <!--Recidencia actual-->\n      <ion-row>\n        <ion-col col-12>\n          <small>Recidencia Actual</small>\n          <p>.............................................</p>\n        </ion-col>\n      </ion-row>\n\n      <!--boton editar-->\n      <div >\n        <button ion-button round (click)="openPage()">\n          Editar Datos\n        </button>\n      </div>\n\n\n\n    </ion-grid>\n\n    <hr>\n</div>\n\n\n<div class="col-sm-6 col-xs-12">\n  <!-- DIV HISTORIAL DE POSTULACIONES -->\n\n  <h3 style="color:darkgrey">Mis Postulaciones</h3>\n  <hr>\n  <ion-list>\n    <ion-item>\n      <p align="right">\n        <small>Fecha: 06/03/2018</small>\n      </p>\n      <h3>Postulación a: </h3>\n      <h2> Trabajadora del Hogar, Tipo: Enviado</h2>\n    </ion-item>\n    <ion-item>\n      <p align="right">\n        <small>Fecha: 06/03/2018</small>\n      </p>\n      <h3>Postulación a: </h3>\n      <h2> Trabajadora del Hogar, Tipo: Recibido</h2>\n    </ion-item>\n\n  </ion-list>\n  <!-- DIV HISTORIAL DE POSTULACIONES -->\n</div>\n</div>\n\n</div>\n\n</ion-content>'/*ion-inline-end:"C:\io\ionic_mihogar\src\final2\src\pages\cliente\cuenta2\cuenta2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], Cuenta2Page);
    return Cuenta2Page;
}());

//# sourceMappingURL=cuenta2.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Editar2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Editar2Page = (function () {
    function Editar2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    }
    /* OCULTAR TAB */
    Editar2Page.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
    };
    Editar2Page.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    Editar2Page.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad Editar2Page');
    };
    Editar2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editar2',template:/*ion-inline-start:"C:\io\ionic_mihogar\src\final2\src\pages\cliente\editar2\editar2.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>editar</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="container">\n<div class="row">\n  <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-xs-12">\n<h3> Datos Personles </h3>\n<hr>\n    <ion-grid>\n\n      <!-- NOMBRE Y APP-->\n      <ion-row>\n        <ion-col col-6>\n          <small>Nombre</small>\n          <input type="text" class="form-control">\n        </ion-col>\n        <ion-col col-6>\n          <small>Apellidos</small>\n          <input type="text" class="form-control">\n        </ion-col>\n\n      </ion-row>\n\n\n      <!-- CI Y Lugar Nac-->\n      <ion-row>\n        <ion-col col-6>\n          <small>Carnet de identidad</small>\n          <input type="text" class="form-control">\n        </ion-col>\n        <ion-col col-6>\n          <small>Expedido en</small>\n          <input type="text" class="form-control">\n        </ion-col>\n\n      </ion-row>\n\n\n      <!-- Celular y Ciudad-->\n      <ion-row>\n        <ion-col col-5>\n          <small>Nro de Celular</small>\n          <input type="text" class="form-control">\n        </ion-col>\n        <ion-col col-7>\n          <small>Ciudad de Recidencia</small>\n          <input type="text" class="form-control">\n        </ion-col>\n      </ion-row>\n\n\n      <!-- Direccion-->\n      <ion-row>\n        <ion-col col-12>\n          <small>Direccion</small>\n          <input type="text" class="form-control">\n        </ion-col>\n      </ion-row>\n\n\n      <div align="center">\n        <button ion-button color="primary">Guardar Cambios</button>\n      </div>\n\n    </ion-grid>\n  </div>\n  </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\io\ionic_mihogar\src\final2\src\pages\cliente\editar2\editar2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], Editar2Page);
    return Editar2Page;
}());

//# sourceMappingURL=editar2.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Buscar1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_avisos_avisos__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Buscar1Page = (function () {
    function Buscar1Page(avisos, data, alertCtrl, navCtrl, navParams) {
        this.avisos = avisos;
        this.data = data;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.localData = this.data.paramData;
        console.log(this.data.paramData);
    }
    Buscar1Page.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.avisos.getAvisos()
            .subscribe(function (data) { _this.jobsList = data; }, function (error) { console.log(error); });
    };
    Buscar1Page.prototype.postular = function (datos) {
        this.navCtrl.parent.select(3);
        console.log(datos);
        /*let confirm = this.alertCtrl.create({
          title: 'Requerimiento para postular',
          message: 'Para postular a este o cualquier otro empleo, primero debe: <br><br>'
            +'1.- Iniciar sesion (si ya ha publicado su perfil alguna vez ). <br> <br>'+
          '2.- Publicar Perfil (si nunca lo ha hecho antes) luego iniciar sesion.',
          buttons: [
            {
              text: 'Publicar perfil',
              handler: () => {
                this.navCtrl.push(PublicPerfilPage);
              }
            },
            {
              text: 'Iniciar sesion',
              handler: () => {
                this.navCtrl.push(Login1Page);
              }
            }
          ]
        });
        confirm.present();
      */
    };
    Buscar1Page.prototype.buscarEmpleo = function (jobsFiltro, modalidad, ciudad) {
        console.log("Trabajos", jobsFiltro);
        console.log("Modalidad", modalidad);
        console.log("Ciudad", ciudad);
    };
    Buscar1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buscar1',template:/*ion-inline-start:"C:\io\ionic_mihogar\src\final2\src\pages\candidato\buscar1\buscar1.html"*/'<!--\nVISTA DE BUSQUEDA DE EMPLEOS\n-->\n<ion-header>\n\n  <ion-navbar>\n    \n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>    \n    <ion-title>    \n      <button ion-button color="rosa" (click)="addAtajo()">\n        <ion-icon name="add"></ion-icon>\n      </button>    \n      <img alt="logo" height="40" src="assets/imgs/logofinal.png">    \n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  \n    <div class="row">\n\n\n      <!-- buscar -->\n      <div class="col-md-3 col-xs-12" style="background-color: #f5f5f5">\n        <div style="padding-left: 3%; padding-right: 3%;">\n          <ion-grid>\n            <ion-row>\n              <h3>Busqueda de Trabajo</h3>\n              <ion-col col-12 col-md-12 >\n        \n                <!-- <ion-label floating>Username</ion-label>-->\n                <ion-list>                  \n                  <ion-item style=" padding-right: 0px !important;\n                            border: 1px solid #dedede !important;">\n                    <ion-label>Busco Trabajo de..</ion-label>\n                    <ion-select [(ngModel)]="jobsFiltro" multiple="true" cancelText="Cancelar" okText="Agregar">\n                      <ion-option value="Jardinero">Jardinero</ion-option>\n                      <ion-option value="Niñera">Niñera</ion-option>\n                      <ion-option value="Trabajadora del Hogar">Trabajadora del Hogar</ion-option>\n                      <ion-option value="Limpieza">Limpieza</ion-option>                  \n                    </ion-select>\n                  </ion-item>\n                  <ion-item>\n                   <!--  <small>Puede seleccinar maximo 3 trabajos</small> -->\n                            <ion-row>\n                              <ion-col col-6 col-md-6>\n                            \n                                <select [(ngModel)]="modalidad" class="form-control">\n                                  <option value="-1">- modalidad -</option>\n                                  <option value="Cama Adentro">Cama Adentro</option>\n                                  <option value="Cama Afuera">Cama Afuera</option>\n                                  <option value="Por día">Por día</option>\n                                  <option value="Fin de Semana">Fin de Semana</option>\n                            \n                                </select>\n                            \n                              </ion-col>\n                              <ion-col col-6 col-md-6>\n                                <select [(ngModel)]="ciudad" class="form-control">\n                                  <option value="-1">- ciudad -</option>\n                                  <option value="Santa Cruz">Santa Cruz</option>\n                                  <option value="Cochabamba">Cochabamba</option>\n                                  <option value="La Paz">La Paz</option>\n                                  <option value="Tarija">Tarija</option>\n                                </select>\n                            \n                              </ion-col>\n                            </ion-row>\n\n                  </ion-item>\n                  <ion-item>\n                      <ion-row>\n                        <ion-col col-12 col-md-12>\n                          <div align="center">                      \n                            <button ion-button (click)="buscarEmpleo(jobsFiltro,modalidad,ciudad)">Buscar Empleo</button>                                \n                          </div>\n                              <!--  <p> {{localData}} </p>        -->\n                              <div class="alert alert-warning">Mis filtros de busquedas</div>\n                              <p> Busco trabajo de: {{jobsFiltro}} </p>\n                              <p> Modalidad: {{modalidad}} </p>\n                              <p> Ciudad: {{ciudad}} </p>\n\n                        </ion-col>\n                      </ion-row>\n                      \n                  </ion-item>\n                </ion-list>\n              </ion-col>\n           </ion-row>\n        \n   \n          \n        \n          </ion-grid>\n        </div>       \n      </div>\n  <!-- buscar -->\n\n\n      \n<!-- AQUI TIENE QUE IR EL LISTADO DE TRABAJOS DINAMICAMENTE -->\n<div class="col-md-7 col-xs-12"  >\n      <div style="padding-left: 3%; padding-right: 3%;">\n      \n\n        <!-- ITEM 1 -->         \n  <div *ngFor="let jobs of jobsList"  >\n   <ion-card>\n          \n          <ion-card-content>\n\n            <h2>SE REQUIERE : {{ jobs.personal_requerido }} </h2>\n            <p>MODALIDAD: {{ jobs.modalidad }} </p>\n            <p>\n              <small>\n                <b> CIUDAD: {{ jobs.ciudad }} - FECHA: {{ jobs.fecha_creacion }} </b>\n              </small>\n            </p>\n            <br>\n            <p>DESCRIPCION\n              <br>{{ jobs.descripcion_trabajo }}</p>\n            <br>\n            <p>\n              <small> GRUPO FAMILIAR :\n                 ADULTOS: {{ jobs.adultos_casa }} ,\n                 NIÑOS: {{ jobs.ninos_casa }}\n                <br>\n                 <b>\n                  SUELDO: {{ jobs.sueldo }} bs.  -  HORARIO: Inicio: {{ jobs.hora_inicio }} \n                  - Fin: {{ jobs.hora_final }}\n                </b>\n              </small>\n            </p>\n          </ion-card-content>\n      \n          <ion-row>\n            <ion-col>              \n              <button ion-button icon-left clear small (click)="postular(jobs)"  >\n                <ion-icon name="thumbs-up"></ion-icon>\n                <div>POSTULAR A ESTE EMPLEO</div>\n              </button>\n            </ion-col>\n          </ion-row>\n  </ion-card>\n  </div>\n\n        <!-- ITEM 1 -->\n      \n\n      \n      </div>\n      \n\n</div>\n      <!-- END LISTADO DE TRABAJOS -->\n\n\n\n\n<!-- ESPACIO PUBLICITARIO  -->\n      <div class="col-md-2 hidden-xs hidden-sm " style="background-color: #f5f5f5" >\n        <br>ESPACIO PUBLICITARIO<br><br>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus repudiandae ea maiores natus, commodi asperiores aut in consequuntur accusamus deleniti sint, illum quaerat aliquam, ullam veritatis? Facere reprehenderit esse voluptates!</div>\n    </div>\n  <!-- ESPACIO PUBLICITARIO  -->\n\n\n</ion-content>\n\n\n\n\n\n        <!-- ITEM 2\n                <ion-card>\n                  <ion-item>\n              \n                    <ion-avatar item-start>\n                      <img src="assets/imgs/about3.jpg">\n                    </ion-avatar>\n              \n                    <h2>SE REQUIERE ......</h2>\n                    <p>MODALIDAD:....</p>\n                    <p>\n                      <small>\n                        <b> Santa Cruz - 06/03/2018 </b>\n                      </small>\n                    </p>\n                  </ion-item>\n              \n              \n                  <ion-card-content>\n                    <p>DESCRIPCION\n                      <br> Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?!\n                      Whoa. This is heavy.</p>\n                    <br>\n                    <p>\n                      <small> GRUPO FAMILIAR : ADULTOS, NIÑOS\n                        <br>\n                        <b>SUELDO :</b> - HORARIO :\n                      </small>\n                    </p>\n                  </ion-card-content>\n              \n                  <ion-row>\n                    <ion-col>\n                      <button ion-button icon-left clear small>\n                        <ion-icon name="thumbs-up"></ion-icon>\n                        <div>POSTULAR A ESTE EMPLEO</div>\n                      </button>\n                    </ion-col>\n                  </ion-row>\n                </ion-card>\n            ITEM 2 -->'/*ion-inline-end:"C:\io\ionic_mihogar\src\final2\src\pages\candidato\buscar1\buscar1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_avisos_avisos__["a" /* AvisosProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], Buscar1Page);
    return Buscar1Page;
}());

//# sourceMappingURL=buscar1.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvisosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// obtengo la url

var AvisosProvider = (function () {
    function AvisosProvider(http) {
        this.http = http;
        console.log('Hello AvisosProvider Provider');
    }
    AvisosProvider.prototype.getAvisos = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* appConfig */].apiUrl + "/api/avisos");
    };
    AvisosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AvisosProvider);
    return AvisosProvider;
}());

//# sourceMappingURL=avisos.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Alerta1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Alerta1Page = (function () {
    function Alerta1Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Alerta1Page.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad Alerta1Page');
    };
    Alerta1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alerta1',template:/*ion-inline-start:"C:\io\ionic_mihogar\src\final2\src\pages\candidato\alerta1\alerta1.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <button ion-button color="rosa" (click)="addAtajo()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n      <img alt="logo" height="40" src="assets/imgs/logofinal.png">\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n<div class="row">\n  <div class="col-md-3 col-xs-12" style="background-color: #f5f5f5">\n \n      <!-- AQUI TIENE QUE IR EL LISTADO DE NOTIFICACIONES DINAMICAMENTE -->\n      <div class="alert alert-warning" align="center">\n        En esta sección podra visualizar a los empleadores interesados por usted\n      </div>\n\n\n  </div>\n  \n    <div class="col-md-7 col-xs-12">\n  <!-- ITEM 2 -->\n  <ion-card>\n    <ion-item>\n  \n      <ion-avatar item-start>\n        <img src="assets/imgs/about3.jpg">\n      </ion-avatar>\n  \n      <h2>SE REQUIERE ......</h2>\n      <p>MODALIDAD:....</p>\n      <p>\n        <small>\n          <b> Santa Cruz - 06/03/2018 </b>\n        </small>\n      </p>\n    </ion-item>\n  \n  \n    <ion-card-content>\n      <p>DESCRIPCION\n        <br> Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?!\n        Whoa. This is heavy.</p>\n      <br>\n      <p>\n        <small> GRUPO FAMILIAR : ADULTOS, NIÑOS\n          <br>\n          <b>SUELDO :</b> - HORARIO :\n        </small>\n      </p>\n    </ion-card-content>\n  \n    <ion-row>\n      <ion-col>\n        <button ion-button icon-left clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>POSTULAR A ESTE EMPLEO</div>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <!-- ITEM 2 -->\n  \n  <!-- ITEM 2 -->\n  <ion-card>\n    <ion-item>\n  \n      <ion-avatar item-start>\n        <img src="assets/imgs/about3.jpg">\n      </ion-avatar>\n  \n      <h2>SE REQUIERE ......</h2>\n      <p>MODALIDAD:....</p>\n      <p>\n        <small>\n          <b> Santa Cruz - 06/03/2018 </b>\n        </small>\n      </p>\n    </ion-item>\n  \n  \n    <ion-card-content>\n      <p>DESCRIPCION\n        <br> Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?!\n        Whoa. This is heavy.</p>\n      <br>\n      <p>\n        <small> GRUPO FAMILIAR : ADULTOS, NIÑOS\n          <br>\n          <b>SUELDO :</b> - HORARIO :\n        </small>\n      </p>\n    </ion-card-content>\n  \n    <ion-row>\n      <ion-col>\n        <button ion-button icon-left clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>POSTULAR A ESTE EMPLEO</div>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <!-- ITEM 2 -->\n  \n    </div>\n\n      <div class="col-md-2 hidden-xs hidden-sm " style="background-color: #f5f5f5">\n        <br> ESPACIO PUBLICITARIO\n        <br>\n        <br>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fugiat suscipit exercitationem dolor eos nam ad rerum sint tenetur quo voluptate esse nesciunt, eius dicta incidunt ab mollitia totam. Fugiat?\n    \n    </div>\n\n</div> \n\n\n\n\n  <!-- END LISTADO DE NOTIFICACIONES -->\n</ion-content>'/*ion-inline-end:"C:\io\ionic_mihogar\src\final2\src\pages\candidato\alerta1\alerta1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], Alerta1Page);
    return Alerta1Page;
}());

//# sourceMappingURL=alerta1.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeforeCuenta1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login1_login1__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__public_perfil_public_perfil__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cuenta1_cuenta1__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BeforeCuenta1Page = (function () {
    function BeforeCuenta1Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BeforeCuenta1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BeforeCuenta1Page');
    };
    BeforeCuenta1Page.prototype.openPage = function (sw) {
        if (sw == 1) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login1_login1__["a" /* Login1Page */]);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__public_perfil_public_perfil__["a" /* PublicPerfilPage */]);
        }
    };
    BeforeCuenta1Page.prototype.ingresar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__cuenta1_cuenta1__["a" /* Cuenta1Page */]);
    };
    BeforeCuenta1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-before-cuenta1',template:/*ion-inline-start:"C:\io\ionic_mihogar\src\final2\src\pages\candidato\before-cuenta1\before-cuenta1.html"*/'<ion-header>\n  <ion-navbar>\n  <button ion-button menuToggle>\n    <ion-icon name="menu"></ion-icon>\n  </button>\n  <ion-title>\n    <button ion-button color="rosa" (click)="addAtajo()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n    <img alt="logo" height="40" src="assets/imgs/logofinal.png">\n  </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="row">\n    <div class="col-sm-6 col-sm-offset-3 col-xs-12">\n\n      <ion-card>\n              <ion-card-header>\n               Inicio de Sesión\n              </ion-card-header>\n              <ion-card-content>\n      \n                <div class="row">\n                  <div class="col-xs-12">\n                    <small>Usuario</small>\n                    <input type="text" class="form-control">\n                  </div>\n                </div>\n      \n                <div class="row">\n                  <div class="col-xs-12">\n                    <small>Contraseña</small>\n                    <input type="password" class="form-control">\n                  </div>\n                </div>\n      <br>\n                <div class="row">\n                  <div class="col-xs-12">\n                    <div class="alert alert-info">\n                      <button ion-button block type="submit" (click)="ingresar()">Ingresar</button>\n                      <small> Recuerde que\n                        <b> por defecto </b> su usuario es su numero de celular y su contraseña es su numero de carnet (si ya ha subido su perfil).</small>\n                    </div>                     \n                          <div class="alert alert-danger">\n                            <button ion-button block color="naranja" (click)="openPage(2)">Publicar Perfil </button>\n                            <small> Publique su perfil si nunca lo ha hecho. Asi podra recibir notificaciones de trabajos especificos</small>\n                          </div>\n                    \n                  </div>\n                </div>\n      \n      \n              </ion-card-content>\n            </ion-card>\n      \n\n\n\n    </div>\n  </div>\n \n</ion-content>'/*ion-inline-end:"C:\io\ionic_mihogar\src\final2\src\pages\candidato\before-cuenta1\before-cuenta1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], BeforeCuenta1Page);
    return BeforeCuenta1Page;
}());

//# sourceMappingURL=before-cuenta1.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cuenta1_cuenta1__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Login1Page = (function () {
    function Login1Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    }
    Login1Page.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad Login1Page');
    };
    Login1Page.prototype.ingresar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__cuenta1_cuenta1__["a" /* Cuenta1Page */]);
    };
    Login1Page.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
    };
    Login1Page.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    Login1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login1',template:/*ion-inline-start:"C:\io\ionic_mihogar\src\final2\src\pages\candidato\login1\login1.html"*/'<!-- \n    VISTA DE LOGEO DEL TRABAJADOR\n-->\n\n<ion-header>\n  <ion-navbar>\n\n    <ion-title>login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="container">\n    \n      <div class="row">\n        <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-xs-12">\n\n                \n  <ion-card>\n    <ion-card-header>\n      Autentificación\n    </ion-card-header>\n    <ion-card-content>\n     \n        <div class="row">\n          <div class="col-xs-12">\n            <small>Usuario</small>\n            <input type="text" class="form-control">\n          </div>\n        </div>\n\n        <div class="row">\n          <div class="col-xs-12">\n            <small>Contraseña</small>\n            <input type="password" class="form-control">\n          </div>\n        </div>\n\n        <div class="row">\n          <div class="col-xs-12" >\n            <button ion-button type="submit" (click)="ingresar()">Ingresar</button>\n          </div>\n        </div>\n     \n\n    </ion-card-content>\n  </ion-card>\n\n\n\n        </div>\n   </div>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\io\ionic_mihogar\src\final2\src\pages\candidato\login1\login1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], Login1Page);
    return Login1Page;
}());

//# sourceMappingURL=login1.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Editar1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Editar1Page = (function () {
    function Editar1Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    }
    Editar1Page.prototype.ionViewDidLoad = function () {
        //  console.log('ionViewDidLoad Editar1Page');
    };
    Editar1Page.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    /* OCULTAR TAB */
    Editar1Page.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
    };
    Editar1Page.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    Editar1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editar1',template:/*ion-inline-start:"C:\io\ionic_mihogar\src\final2\src\pages\candidato\editar1\editar1.html"*/'<!--\n VISTA DE EDITAR PERFIL DE TRABAJADOR CON CUENTA\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Editar Datos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<!--   <ion-icon name="create"></ion-icon> -->\n<!-- \n  <button color="warning" icon-left ion-button round ion-button (click)="goBack()">\n    <ion-icon name="hammer"></ion-icon>\n    Volver\n  </button>\n-->\n\n<!-- SUBIR PERFIL -->\n<div class="container">\n\n  <div class="row">\n    <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-xs-12">\n\n      <h3> Datos Personles </h3>\n      <hr>\n      <!-- NOMBRE Y APP-->\n      <div class="row">\n        <div class="col-xs-6">\n          <small>Nombre</small>\n          <input type="text" class="form-control">\n        </div>\n        <div class="col-xs-6">\n          <small>Apellidos</small>\n          <input type="text" class="form-control">\n        </div>\n      </div>\n\n      <!-- CI Y Lugar Nac-->\n      <div class="row">\n        <div class="col-xs-6">\n          <small>Carnet de identidad</small>\n          <input type="text" class="form-control">\n        </div>\n        <div class="col-xs-6">\n          <small>Expedido en </small>\n          <select name="" id="" class="form-control">\n            <option value="-1" disabled>-- Expedido en --</option>\n            <option value="0">Santa Cruz</option>\n            <option value="1">Cochabamba</option>\n            <option value="2">La Paz</option>\n          </select>\n        </div>\n      </div>\n\n      <!-- FECHA NACIMIENTO -->\n      <br>\n      <small>Fecha de Nacimiento</small>\n      <br>\n      <div class="row">\n        <div class="col-xs-4">\n          <input type="text" class="form-control" placeholder="Dia">\n        </div>\n\n        <div class="col-xs-4">\n          <input type="text" class="form-control" placeholder="Mes">\n        </div>\n\n        <div class="col-xs-4">\n          <input type="text" class="form-control" placeholder="Año">\n        </div>\n      </div>\n      <!-- FECHA NACIMIENTO -->\n\n      <!-- Celular y Ciudad-->\n      <div class="row">\n        <div class="col-xs-7">\n          <small>Lugar de Nac.</small>\n          <input type="text" class="form-control">\n        </div>\n\n        <div class="col-xs-5">\n          <small>Nro de Celular</small>\n          <input type="number" class="form-control">\n        </div>\n\n      </div>\n\n      <!-- Direccion de Domicio Actual -->\n      <div class="row">\n        <div class="col-xs-12">\n          <small>Direccion de Domicio Actual</small>\n          <input type="text" class="form-control">\n        </div>\n      </div>\n\n      <!-- Ciudad donde vive Actualmente -->\n      <div class="row">\n        <div class="col-xs-12">\n          <small>Ciudad donde vive Actualmente</small>\n          <input type="text" class="form-control">\n        </div>\n      </div>\n      <!-- Ciudad donde vive Actualmente -->\n\n      <!--FOTO CANDIDATO-->\n      <div class="row">\n        <div class="col-xs-12">\n          <br>\n          <small> Foto De Medio Cuerpo, Mirada al Frente:</small>\n\n          <div align="center">\n            <img src="https://www.webespacio.com/wp-content/uploads/2012/01/foto-perfil.jpg" alt="perfil" width="150">\n            <br>\n            <div>\n              <button ion-button>\n                Subir Foto\n              </button>\n              <button ion-button>\n                Borrar Foto\n              </button>\n            </div>\n          </div>\n\n        </div>\n      </div>\n      <!--FOTO CANDIDATO -->\n\n\n\n      <hr>\n\n      <h3>Datos de Trabajo</h3>\n      <!-- Requiero, Modalidad, Sueldo-->\n      <div class="row">\n        <div class="col-xs-12">\n          <ion-list>\n            <ion-item>\n              <ion-label>Busco Trabajo de..</ion-label>\n              <ion-select [(ngModel)]="toppings" multiple="true" cancelText="Cancelar" okText="Agregar">\n                <ion-option value="bacon">Jardinero</ion-option>\n                <ion-option value="olives">Niñera</ion-option>\n                <ion-option value="xcheese">Trabajadora del Hogar</ion-option>\n                <ion-option value="peppers">Limpieza</ion-option>\n                <ion-option value="mushrooms">Mushrooms</ion-option>\n                <ion-option value="onions">Onions</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-list>\n\n        </div>\n      </div>\n\n      <div class="row">\n        <div class="col-xs-12">\n          <small>Modalida</small>\n          <select name="" id="" class="form-control">\n            <option value="-1">-- Modalidad --</option>\n            <option value="0">Cama Adentro</option>\n            <option value="1">Cama Afuera</option>\n          </select>\n        </div>\n      </div>\n\n      <!-- Pasaje, Inicio, Fin-->\n      <div class="row">\n\n        <div class="col-xs-12">\n          <small>Pretencion Salarial Mensual(Bs.) </small>\n          <input type="number" class="form-control">\n        </div>\n      </div>\n      <hr>\n\n      <!-- Experiencia Laboral -->\n\n\n      <h3>Experiencia Laboral</h3>\n\n\n      <!-- Ultimo Cargo Desempeñado-->\n      <div class="row">\n        <div class="col-xs-12">\n          <small>Ultimo Cargo Desempeñado</small>\n          <input type="text" class="form-control">\n        </div>\n      </div>\n\n      <!--TIEMPO DE TRABAJO -->\n      <div class="row">\n        <div class="col-xs-12">\n          <small>Tiempo de Trabajo</small>\n          <div class="row">\n            <div class="col-xs-6">\n              <input type="text" placeholder="Años" class="form-control">\n            </div>\n\n            <div class="col-xs-6">\n              <input type="text" placeholder="Meses" class="form-control">\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n\n\n      <!-- Fecha de Retiro del Ultimo Trabajo-->\n      <div class="row">\n        <div class="col-xs-12">\n          <small>Fecha de Retiro del Ultimo Trabajo</small>\n          <div class="row">\n            <div class="col-xs-6">\n              <input type="text" placeholder="Años" class="form-control">\n            </div>\n\n            <div class="col-xs-6">\n              <input type="text" placeholder="Meses" class="form-control">\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n\n\n\n      <!--MOTIVO DE RETIRO -->\n      <div class="row">\n        <div class="col-xs-12">\n          <small>Motivo de Retiro</small>\n          <input type="text" class="form-control">\n        </div>\n      </div>\n\n      <!-- NOMBRE DEL JEFE ANTERIOR-->\n      <div class="row">\n        <div class="col-xs-12">\n          <small>Nombre del Jefe Anterior</small>\n          <input type="text" class="form-control">\n        </div>\n      </div>\n\n\n      <!-- Telefono del Jefe Anterior-->\n      <div class="row">\n        <div class="col-xs-12">\n          <small>Telefono del Jefe Anterior</small>\n          <input type="number" class="form-control">\n        </div>\n      </div>\n\n      <div class="row">\n        <div class="col-xs-12" align="right">\n          <button ion-button>\n            Agregar Experiencia\n          </button>\n        </div>\n      </div>\n      <!-- Experiencia Laboral -->\n\n\n      <hr>\n\n      <!-- Terminos y Publicacion-->\n\n      <div class="row">\n        <div class="col-xs-12" align="center">\n          <small>Al hacer click aceptas los Terminos y Condiciones</small>\n          <br>\n          <label>\n            <input type="checkbox" value="ok" checked>Si estoy de Acuerdo </label>\n        </div>\n      </div>\n\n      <br>\n      <div class="row">\n        <div class="col-xs-12" align="center">\n          <button ion-button round (click)=" presentModal()">Publicar Perfil</button>\n        </div>\n      </div>\n      <br>\n    </div>\n    <!-- SUBIR PERFIL -->\n\n  </div>\n</div>\n\n</ion-content>'/*ion-inline-end:"C:\io\ionic_mihogar\src\final2\src\pages\candidato\editar1\editar1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], Editar1Page);
    return Editar1Page;
}());

//# sourceMappingURL=editar1.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicPerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vprevia_perfil_vprevia_perfil__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { BeforeCuenta1Page } from "../before-cuenta1/before-cuenta1";

var PublicPerfilPage = (function () {
    function PublicPerfilPage(modalCtrl, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dts_person = {
            nom: String,
            apell: String,
            ci: Number,
            expedido: String,
            fechaNac: Date,
            lugarNac: String,
            celular: Number,
            direccion_1: String,
            ciudad_actual: String,
            foto: String
        };
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    }
    PublicPerfilPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad PublicPerfilPage');
    };
    PublicPerfilPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    PublicPerfilPage.prototype.presentModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__vprevia_perfil_vprevia_perfil__["a" /* VpreviaPerfilPage */]);
        modal.present();
    };
    /* OCULTAR TAB */
    PublicPerfilPage.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
    };
    PublicPerfilPage.prototype.ionViewWillLeave = function () {
        this.tabBarElement.style.display = 'flex';
    };
    PublicPerfilPage.prototype.addExperiencia = function () {
        var text = document.getElementById('add').innerText;
        console.log(text);
        if (text == "ELIMINAR") {
            document.getElementById('add').style.background = "#00aeef";
            document.getElementById('add').innerText = 'AGREGAR';
        }
        else {
            document.getElementById('add').style.background = "#f53d3d";
            document.getElementById('add').innerText = 'ELIMINAR';
        }
    };
    PublicPerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-public-perfil',template:/*ion-inline-start:"C:\io\ionic_mihogar\src\final2\src\pages\candidato\public-perfil\public-perfil.html"*/'<!--\nVISTA DE REGISTRO DE TRABAJOR SIN CUENTA\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Registro de Candidato</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!--   <ion-icon name="create"></ion-icon> -->\n  <!-- \n  <button color="warning" icon-left ion-button round ion-button (click)="goBack()">\n    <ion-icon name="hammer"></ion-icon>\n    Volver\n  </button>\n-->\n\n  <!-- SUBIR PERFIL -->\n  <div class="container">\n    \n    <div class="row">\n    <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-xs-12">\n   \n\n      <h3> Datos Personles </h3>    \n      <!-- NOMBRE Y APP-->      \n    <div class="row">\n      <div class="col-xs-6">\n        <small>Nombre</small>\n        <input type="text" [(ngModel)]="dts_person.nom" class="form-control">\n      </div>\n      <div class="col-xs-6">\n        <small>Apellidos</small>\n        <input type="text" [(ngModel)]="dts_person.apell" class="form-control">\n      </div>\n    </div>\n\n    <!-- CI Y Lugar Nac-->\n    <div class="row">\n      <div class="col-xs-6">\n        <small>Carnet de identidad</small>\n        <input type="number" [(ngModel)]="dts_person.ci" class="form-control">\n      </div>\n      <div class="col-xs-6">\n        <small>Expedido en </small>\n        <select name="" id="" class="form-control">\n          <option value="-1" disabled>-- Expedido en --</option>\n          <option value="0">Santa Cruz</option>\n          <option value="1">Cochabamba</option>\n          <option value="2">La Paz</option>\n        </select>\n      </div>\n    </div>\n\n    <!-- FECHA NACIMIENTO -->\n    <br>\n    <ion-item>\n      <ion-label>Fecha de Nacimiento: </ion-label>\n            <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate" min="1900" max="2000"\n             cancelText="Cancelar" doneText="Guardar" ></ion-datetime>\n    </ion-item>\n    <br>\n\n    <!--\n    <div class="row">\n      <div class="col-xs-4">\n        <input type="text" class="form-control" placeholder="Dia">\n      </div>\n\n      <div class="col-xs-4">\n        <input type="text" class="form-control" placeholder="Mes">\n      </div>\n\n      <div class="col-xs-4">\n        <input type="text" class="form-control" placeholder="Año">\n      </div>\n    </div>\n  -->\n    <!-- FECHA NACIMIENTO -->\n\n    <!-- Celular y Ciudad-->\n    <div class="row">\n      <div class="col-xs-7">\n        <small>Lugar de Nac.</small>\n        <input type="text" class="form-control">\n      </div>\n\n      <div class="col-xs-5">\n        <small>Nro de Celular</small>\n        <input type="number" class="form-control">\n      </div>\n\n    </div>\n\n    <!-- Direccion de Domicio Actual -->\n    <div class="row">\n      <div class="col-xs-12">\n        <small>Direccion de Domicio Actual</small>\n        <input type="text" class="form-control">\n      </div>\n    </div>\n\n    <!-- Ciudad donde vive Actualmente -->\n    <div class="row">\n      <div class="col-xs-12">\n        <small>Ciudad donde vive Actualmente</small>\n        <input type="text" class="form-control">\n      </div>\n    </div>\n    <!-- Ciudad donde vive Actualmente -->\n<div class="row">\n  <div class="form-group col-md-4">\n    <label class="btn btn-default btn-file">\n      Buscar logo\n      <input style="display: none" name="logo" type="file">\n    </label>\n    <span class="help-block"></span>\n  </div>\n\n  <div id="container-logo" class="pull-right" style="display: none">\n    <img class="img-responsive" width="200" id="logo-img" src="#" />\n  </div>\n</div>\n\n    <!--FOTO CANDIDATO-->\n    <div class="row">\n      <div class="col-xs-12">\n        <br>\n        <small> Foto De Medio Cuerpo, Mirada al Frente:</small>\n\n        <div align="center">          \n          <input name="file-input" id="file-input" type="file" />\n          <br />\n          <img id="imgSalida" width="150" height="150" src="https://www.webespacio.com/wp-content/uploads/2012/01/foto-perfil.jpg" />\n\n         <!-- <img src="https://www.webespacio.com/wp-content/uploads/2012/01/foto-perfil.jpg" alt="perfil" width="150">\n          <br>\n          <div>\n            <button ion-button>\n              Subir Foto\n            </button>\n            <button ion-button>\n              Borrar Foto\n            </button>\n          </div>-->\n        </div>\n\n\n\n\n\n      </div>\n    </div>\n    <!--FOTO CANDIDATO -->\n\n\n\n    <hr>\n\n    <h3>Datos de Trabajo</h3>\n    <!-- Requiero, Modalidad, Sueldo-->\n    <div class="row">\n      <div class="col-xs-12">\n        <ion-list>\n          <ion-item>\n            <ion-label>Busco Trabajo de..</ion-label>\n            <ion-select [(ngModel)]="toppings" multiple="true" cancelText="Cancelar" okText="Agregar">\n              <ion-option value="bacon">Jardinero</ion-option>\n              <ion-option value="olives">Niñera</ion-option>\n              <ion-option value="xcheese">Trabajadora del Hogar</ion-option>\n              <ion-option value="peppers">Limpieza</ion-option>\n              <ion-option value="mushrooms">Mushrooms</ion-option>\n              <ion-option value="onions">Onions</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-list>\n\n      </div>\n    </div>\n\n    <div class="row">\n      <div class="col-xs-12">\n        <small>Modalida</small>\n        <select name="" id="" class="form-control">\n          <option value="-1">-- Modalidad --</option>\n          <option value="0">Cama Adentro</option>\n          <option value="1">Cama Afuera</option>\n        </select>\n      </div>\n    </div>\n\n    <!-- Pasaje, Inicio, Fin-->\n    <div class="row">\n\n      <div class="col-xs-12">\n        <small>Pretencion Salarial Mensual(Bs.) </small>\n        <input type="number" class="form-control">\n      </div>\n    </div>\n    <hr>\n\n    <!-- Experiencia Laboral -->\n\n\n    <h3>Experiencia Laboral</h3>\n\n\n    <!-- Ultimo Cargo Desempeñado-->\n    <div class="row">\n      <div class="col-xs-12">\n        <small>Ultimo Cargo Desempeñado</small>\n        <input type="text" class="form-control">\n      </div>\n    </div>\n\n    <!--TIEMPO DE TRABAJO -->\n    <div class="row">\n      <div class="col-xs-12">\n        \n        <ion-item>\n          <ion-label>Tiempo de trabajo: </ion-label>\n          <ion-datetime displayFormat="MM/YYYY" [(ngModel)]="myDate3" min="1900" max="2000" cancelText="Cancelar" doneText="Guardar"></ion-datetime>\n        </ion-item>\n       \n      </div>\n    \n    </div>\n\n\n\n\n    <!-- Fecha de Retiro del Ultimo Trabajo-->\n    <div class="row">\n      <div class="col-xs-12">\n    \n      <ion-item>\n        <ion-label>Fecha de Ultimo trabajo: </ion-label>\n        <ion-datetime displayFormat="MM/YYYY" [(ngModel)]="myDate2" min="1900" max="2000" cancelText="Cancelar" doneText="Guardar"></ion-datetime>\n      </ion-item>\n     \n      </div>\n\n    </div>\n\n\n\n\n    <!--MOTIVO DE RETIRO -->\n    <div class="row">\n      <div class="col-xs-12">\n        <small>Motivo de Retiro</small>\n        <input type="text" class="form-control">\n      </div>\n    </div>\n\n    <!-- NOMBRE DEL JEFE ANTERIOR-->\n    <div class="row">\n      <div class="col-xs-12">\n        <small>Nombre del Jefe Anterior</small>\n        <input type="text" class="form-control">\n      </div>\n    </div>\n\n\n    <!-- Telefono del Jefe Anterior-->\n    <div class="row">\n      <div class="col-xs-12">\n        <small>Telefono del Jefe Anterior</small>\n        <input type="number" class="form-control">\n      </div>\n    </div>\n\n  \n    <!-- Experiencia Laboral -->\n\n\n\n<!-- Experiencia Laboral 2 -->\n\n<div class="collapse" id="expe2" >\n<h3>Experiencia Laboral 2 </h3>\n\n\n<!-- Ultimo Cargo Desempeñado-->\n<div class="row">\n  <div class="col-xs-12">\n    <small>Ultimo Cargo Desempeñado</small>\n    <input type="text" class="form-control">\n  </div>\n</div>\n\n<!--TIEMPO DE TRABAJO -->\n<div class="row">\n  <div class="col-xs-12">\n    <small>Tiempo de Trabajo</small>\n    <div class="row">\n      <div class="col-xs-6">\n        <input type="text" placeholder="Años" class="form-control">\n      </div>\n\n      <div class="col-xs-6">\n        <input type="text" placeholder="Meses" class="form-control">\n      </div>\n    </div>\n  </div>\n\n</div>\n\n\n\n<!-- Fecha de Retiro del Ultimo Trabajo-->\n<div class="row">\n  <div class="col-xs-12">\n    <small>Fecha de Retiro del Ultimo Trabajo</small>\n    <div class="row">\n      <div class="col-xs-6">\n        <input type="text" placeholder="Años" class="form-control">\n      </div>\n\n      <div class="col-xs-6">\n        <input type="text" placeholder="Meses" class="form-control">\n      </div>\n    </div>\n  </div>\n\n</div>\n\n\n\n\n<!--MOTIVO DE RETIRO -->\n<div class="row">\n  <div class="col-xs-12">\n    <small>Motivo de Retiro</small>\n    <input type="text" class="form-control">\n  </div>\n</div>\n\n<!-- NOMBRE DEL JEFE ANTERIOR-->\n<div class="row">\n  <div class="col-xs-12">\n    <small>Nombre del Jefe Anterior</small>\n    <input type="text" class="form-control">\n  </div>\n</div>\n\n\n<!-- Telefono del Jefe Anterior-->\n<div class="row">\n  <div class="col-xs-12">\n    <small>Telefono del Jefe Anterior</small>\n    <input type="number" class="form-control">\n  </div>\n</div>\n\n</div>\n\n  <div class="row">\n    <div class="col-xs-12" align="right">\n      <button ion-button data-toggle="collapse" id="add" (click)="addExperiencia()" data-target="#expe2">\n        Agregar Experiencia\n      </button>\n    </div>\n  </div>\n\n<!-- Experiencia Laboral 2-->\n\n    <hr>\n\n    <!-- Terminos y Publicacion-->\n\n    <div class="row">\n      <div class="col-xs-12" align="center">\n        <small>Al hacer click aceptas los Terminos y Condiciones</small>\n        <br>\n        <label>\n          <input type="checkbox" value="ok" checked>Si estoy de Acuerdo </label>\n      </div>\n    </div>\n\n    <br>\n    <div class="row">\n      <div class="col-xs-12" align="center">\n        <button ion-button round (click)="presentModal()" >Publicar Perfil</button>\n      </div>\n    </div>\n    <br>\n  </div>\n<!-- SUBIR PERFIL -->\n\n</div>\n</div>\n<script>\n  $(window).load(function () {\n\n    $(function () {\n      $(\'#file-input\').change(function (e) {\n        addImage(e);\n      });\n\n      function addImage(e) {\n        var file = e.target.files[0],\n          imageType = /image.*/;\n\n        if (!file.type.match(imageType))\n          return;\n\n        var reader = new FileReader();\n        reader.onload = fileOnload;\n        reader.readAsDataURL(file);\n      }\n\n      function fileOnload(e) {\n        var result = e.target.result;\n        $(\'#imgSalida\').attr("src", result);\n      }\n    });\n  });\n  jQuery(function () {\n    jQuery("input[type=file]").change(function () {\n      readURL(this);\n    });\n\n    const readURL = (input) => {\n\n      if (input.files && input.files[0]) {\n        const reader = new FileReader();\n\n        reader.onload = (e) => {\n          jQuery(\'#logo-img\').attr(\'src\', e.target.result)\n          jQuery(\'#container-logo\').css(\'display\', \'block\');\n        }\n        reader.readAsDataURL(input.files[0]);\n      }\n    };\n  })\n\n</script> \n\n</ion-content>\n'/*ion-inline-end:"C:\io\ionic_mihogar\src\final2\src\pages\candidato\public-perfil\public-perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PublicPerfilPage);
    return PublicPerfilPage;
}());

//# sourceMappingURL=public-perfil.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VpreviaPerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VpreviaPerfilPage = (function () {
    function VpreviaPerfilPage(alertCtrl, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    VpreviaPerfilPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad VpreviaPerfilPage');
    };
    VpreviaPerfilPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    VpreviaPerfilPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: '<center>Aviso</center>',
            subTitle: 'Su Perfil ha sido enviado a revision. MUY PRONTO SERA PUBLICADO. <br><br>' +
                '<b>Su Usuario es:</b> Nro. de Celular <br><b>Su clave es:</b> Nro. de Carnet',
            buttons: ['OK']
        });
        alert.present();
    };
    VpreviaPerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vprevia-perfil',template:/*ion-inline-start:"C:\io\ionic_mihogar\src\final2\src\pages\candidato\vprevia-perfil\vprevia-perfil.html"*/'<!--\n  VISTA PREVIA DE PERFIL DEL TRABAJADOR\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Vista Previa</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button color="warning" icon-left ion-button round ion-button (click)="goBack()">\n    <!--   <ion-icon name="create"></ion-icon> -->\n    <ion-icon name="hammer"></ion-icon>\n    Volver\n  </button>\n  <hr>\n\n  <div class="row">\n    <div class="col-xs-12">\n      <div align="center">\n        <img src="assets/imgs/perfil.jpg" alt="perfil" width="150">\n        <br>\n        <h3>Nombres y Apellidos del usuario</h3>\n        <hr>\n        <h4 style="color:darkgrey">DATOS GENERALES</h4>\n      </div>\n\n      <p>CODIGO: 00000</p>\n      <p>EDAD: 20</p>\n      <p>LUGAR DE NACIMIENTO: Comarapa</p>\n      <p>BUSCA TRABAJO DE : Trabajadora de Hogar, Limpieza, Niñera </p>\n      <p>MODALIDAD DE TRABAJO: Cama Adentro</p>\n      <p>PRETENSION SALARIAL: Bs.- 2000 (NEGOCIABLE)</p>\n      <hr>\n      <h4 style="color:darkgrey" align="center">Experiencia</h4>\n      <p>TRABAJO EN: Casa de familia</p>\n      <p>CIUDAD DE TRABAJO: Santa Cruz</p>\n      <p>CARGO DESEMPEÑADO: Doméstica</p>\n      <p>TIEMPO DE TRABAJO: 6 Año(s)</p>\n      <p>FECHA DE RETIRO: 10-2017</p>\n\n      <!--\n         <div class="row">\n           <div class="col-xs-6" align="right">CODIGO</div>\n           <div class="col-xs-6" align="left"> 0000000</div>\n         </div>\n\n         <div class="row">\n            <div class="col-xs-6" align="right">EDAD</div>\n            <div class="col-xs-6" align="left">20</div>\n          </div>\n\n          <div class="row">\n              <div class="col-xs-6" align="right">LUGAR DE NAC.:</div>\n              <div class="col-xs-6" align="left">COMARAPA</div>\n            </div>\n\n            <div class="row">\n                <div class="col-xs-6" align="right">BUSCA TRABAJO DE:</div>\n                <div class="col-xs-6" align="left">Trabajadora de Hogar, Limpieza, Niñera</div>\n              </div>\n              <div class="row">\n                  <div class="col-xs-6" align="right">MODALIDAD DE TRABAJO:</div>\n                  <div class="col-xs-6" align="left">Cama Adentro</div>\n                </div>\n                <div class="row">\n                    <div class="col-xs-6" align="right">PRETENSION SALARIAL:</div>\n                    <div class="col-xs-6" align="left">Bs.- 2000 (NEGOCIABLE)</div>\n                  </div>\n                -->\n\n    </div>\n  </div>\n\n  <div class="row">\n    <div class="col-xs-12" align="center">\n      <button ion-button outline (click)="goBack()">Modificar</button> &nbsp;&nbsp;&nbsp;\n      <button ion-button (click)="showAlert()">Publicar</button>\n    </div>\n  </div>\n  <hr>\n\n\n</ion-content>'/*ion-inline-end:"C:\io\ionic_mihogar\src\final2\src\pages\candidato\vprevia-perfil\vprevia-perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], VpreviaPerfilPage);
    return VpreviaPerfilPage;
}());

//# sourceMappingURL=vprevia-perfil.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(243);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_candidato_alerta1_alerta1__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_candidato_before_cuenta1_before_cuenta1__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_candidato_buscar1_buscar1__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_candidato_cuenta1_cuenta1__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_candidato_editar1_editar1__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_candidato_inicio1_inicio1__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_candidato_login1_login1__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_candidato_public_perfil_public_perfil__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_candidato_tab1_tab1__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_candidato_terminos1_terminos1__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_candidato_vprevia_perfil_vprevia_perfil__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_cliente_tab2_tab2__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_cliente_buscar2_buscar2__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_cliente_inicio2_inicio2__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_cliente_alerta2_alerta2__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_cliente_before_cuenta2_before_cuenta2__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_cliente_cuenta2_cuenta2__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_cliente_public_aviso_public_aviso__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_cliente_editar2_editar2__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_cliente_login2_login2__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_cliente_pago2_pago2__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_cliente_before_public_before_public__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_data_data__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_avisos_avisos__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_common_http__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//import { HomePage } from '../pages/home/home';
/* paginas de candidato */











/* paginas de cliente */














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_candidato_tab1_tab1__["a" /* Tab1Page */],
                __WEBPACK_IMPORTED_MODULE_17__pages_cliente_tab2_tab2__["a" /* Tab2Page */],
                __WEBPACK_IMPORTED_MODULE_18__pages_cliente_buscar2_buscar2__["a" /* Buscar2Page */],
                __WEBPACK_IMPORTED_MODULE_19__pages_cliente_inicio2_inicio2__["a" /* Inicio2Page */],
                __WEBPACK_IMPORTED_MODULE_20__pages_cliente_alerta2_alerta2__["a" /* Alerta2Page */],
                __WEBPACK_IMPORTED_MODULE_21__pages_cliente_before_cuenta2_before_cuenta2__["a" /* BeforeCuenta2Page */],
                __WEBPACK_IMPORTED_MODULE_22__pages_cliente_cuenta2_cuenta2__["a" /* Cuenta2Page */],
                __WEBPACK_IMPORTED_MODULE_23__pages_cliente_public_aviso_public_aviso__["a" /* PublicAvisoPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_cliente_editar2_editar2__["a" /* Editar2Page */],
                __WEBPACK_IMPORTED_MODULE_25__pages_cliente_login2_login2__["a" /* Login2Page */],
                __WEBPACK_IMPORTED_MODULE_26__pages_cliente_pago2_pago2__["a" /* Pago2Page */],
                __WEBPACK_IMPORTED_MODULE_27__pages_cliente_before_public_before_public__["a" /* BeforePublicPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_candidato_alerta1_alerta1__["a" /* Alerta1Page */],
                __WEBPACK_IMPORTED_MODULE_7__pages_candidato_before_cuenta1_before_cuenta1__["a" /* BeforeCuenta1Page */],
                __WEBPACK_IMPORTED_MODULE_8__pages_candidato_buscar1_buscar1__["a" /* Buscar1Page */],
                __WEBPACK_IMPORTED_MODULE_9__pages_candidato_cuenta1_cuenta1__["a" /* Cuenta1Page */],
                __WEBPACK_IMPORTED_MODULE_10__pages_candidato_editar1_editar1__["a" /* Editar1Page */],
                __WEBPACK_IMPORTED_MODULE_11__pages_candidato_inicio1_inicio1__["a" /* Inicio1Page */],
                __WEBPACK_IMPORTED_MODULE_12__pages_candidato_login1_login1__["a" /* Login1Page */],
                __WEBPACK_IMPORTED_MODULE_13__pages_candidato_public_perfil_public_perfil__["a" /* PublicPerfilPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_candidato_terminos1_terminos1__["a" /* Terminos1Page */],
                __WEBPACK_IMPORTED_MODULE_16__pages_candidato_vprevia_perfil_vprevia_perfil__["a" /* VpreviaPerfilPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_30__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { segment: 'candidato', component: __WEBPACK_IMPORTED_MODULE_14__pages_candidato_tab1_tab1__["a" /* Tab1Page */], name: 'Inicio Candidato' },
                        { segment: 'cliente', component: __WEBPACK_IMPORTED_MODULE_17__pages_cliente_tab2_tab2__["a" /* Tab2Page */], name: 'Inicio Cliente' }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_candidato_tab1_tab1__["a" /* Tab1Page */],
                __WEBPACK_IMPORTED_MODULE_17__pages_cliente_tab2_tab2__["a" /* Tab2Page */],
                __WEBPACK_IMPORTED_MODULE_18__pages_cliente_buscar2_buscar2__["a" /* Buscar2Page */],
                __WEBPACK_IMPORTED_MODULE_19__pages_cliente_inicio2_inicio2__["a" /* Inicio2Page */],
                __WEBPACK_IMPORTED_MODULE_20__pages_cliente_alerta2_alerta2__["a" /* Alerta2Page */],
                __WEBPACK_IMPORTED_MODULE_21__pages_cliente_before_cuenta2_before_cuenta2__["a" /* BeforeCuenta2Page */],
                __WEBPACK_IMPORTED_MODULE_22__pages_cliente_cuenta2_cuenta2__["a" /* Cuenta2Page */],
                __WEBPACK_IMPORTED_MODULE_23__pages_cliente_public_aviso_public_aviso__["a" /* PublicAvisoPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_cliente_editar2_editar2__["a" /* Editar2Page */],
                __WEBPACK_IMPORTED_MODULE_25__pages_cliente_login2_login2__["a" /* Login2Page */],
                __WEBPACK_IMPORTED_MODULE_26__pages_cliente_pago2_pago2__["a" /* Pago2Page */],
                __WEBPACK_IMPORTED_MODULE_27__pages_cliente_before_public_before_public__["a" /* BeforePublicPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_candidato_alerta1_alerta1__["a" /* Alerta1Page */],
                __WEBPACK_IMPORTED_MODULE_7__pages_candidato_before_cuenta1_before_cuenta1__["a" /* BeforeCuenta1Page */],
                __WEBPACK_IMPORTED_MODULE_8__pages_candidato_buscar1_buscar1__["a" /* Buscar1Page */],
                __WEBPACK_IMPORTED_MODULE_9__pages_candidato_cuenta1_cuenta1__["a" /* Cuenta1Page */],
                __WEBPACK_IMPORTED_MODULE_10__pages_candidato_editar1_editar1__["a" /* Editar1Page */],
                __WEBPACK_IMPORTED_MODULE_11__pages_candidato_inicio1_inicio1__["a" /* Inicio1Page */],
                __WEBPACK_IMPORTED_MODULE_12__pages_candidato_login1_login1__["a" /* Login1Page */],
                __WEBPACK_IMPORTED_MODULE_13__pages_candidato_public_perfil_public_perfil__["a" /* PublicPerfilPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_candidato_terminos1_terminos1__["a" /* Terminos1Page */],
                __WEBPACK_IMPORTED_MODULE_16__pages_candidato_vprevia_perfil_vprevia_perfil__["a" /* VpreviaPerfilPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_28__providers_data_data__["a" /* DataProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_avisos_avisos__["a" /* AvisosProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_candidato_tab1_tab1__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { HomePage } from '../pages/home/home';
//import { Inicio1Page  } from "../pages/candidato/inicio1/inicio1";

//import { Tab2Page } from "../pages/cliente/tab2/tab2";
var MyApp = (function () {
    //  rootPage: any = Tab2Page;
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_candidato_tab1_tab1__["a" /* Tab1Page */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\io\ionic_mihogar\src\final2\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\io\ionic_mihogar\src\final2\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appConfig; });
var appConfig = {
    apiUrl: '198.58.112.163:7000'
};
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Terminos1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Terminos1Page = (function () {
    function Terminos1Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Terminos1Page.prototype.ionViewDidLoad = function () {
        //  console.log('ionViewDidLoad Terminos1Page');
    };
    Terminos1Page.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Terminos1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-terminos1',template:/*ion-inline-start:"C:\io\ionic_mihogar\src\final2\src\pages\candidato\terminos1\terminos1.html"*/'<!--\n  VISTA DE TERMINOS Y CONDICIONES\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>terminos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button color="warning" icon-left ion-button round ion-button (click)="goBack()">\n    <!--   <ion-icon name="create"></ion-icon> -->\n    <ion-icon name="hammer"></ion-icon>\n    Volver\n  </button>\n  <hr>\n\n  <!-- TERMINOS Y CONDICIONES -->\n  <h3>Terminos y Condiciones</h3>\n  <p>\n    Declaro que toda la información proporcionada a Trabajo Ofertas es real y soy el único(a) responsable de la veracidad y exactitud\n    de todos los datos consignados en la información y documentación presentada. Autorizo a Trabajo Ofertas a realizarla\n    verificación inopinada de la información y documentación entregada, para que por cualquier medio legal se compruebe la\n    veracidad de la misma. Asimismo, autorizo a Trabajo Ofertas a usar y entregar a terceros toda la información y datos\n    proporcionados, incluyendo la evaluación recibida de mis anteriores empleadores, sea por medio físico o digital, dando\n    de esta manera mi consentimiento, según lo establece el Artículo 56 en sus incisos c) y d) del Decreto Supremo 1793 del\n    13 de noviembre del 2013. He sido informado y acepto que Trabajo Ofertas sólo me proporcionará información de terceros\n    que requieren contratar los servicios que ofrezco y es mi persona la que aceptará o no entablar una relación laboral\n    patronal con alguno de ellos; siendo mi obligación la de verificar la información y antecedentes de mi futuro empleador.\n    Por este motivo, en caso de encontrarme frente a una actividad relacionado con la trata y tráfico de personas o con actividades\n    delictivas o tipificadas en la ley 1008, eximo a Trabajo Ofertas de cualquier responsabilidad. Acepto también que no\n    tengo ninguna relación laboral con Trabajo Ofertas y que nuestra relación es solo comercial. En caso de que a través\n    de la información proporcionada por Trabajo Ofertas, mi persona acuerde una relación laboral con un tercero, declaro\n    que conozco mis derechos y obligaciones, así como el procedimiento establecido en la Ley General de Trabajo, que aplicaré\n    con la persona con la que acuerde la relación laboral, eximiendo de esta manera a Trabajo Ofertas de cualquier responsabilidad\n    y reclamo posterior.\n  </p>\n  <!-- TERMINOS Y CONDICIONES -->\n</ion-content>'/*ion-inline-end:"C:\io\ionic_mihogar\src\final2\src\pages\candidato\terminos1\terminos1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], Terminos1Page);
    return Terminos1Page;
}());

//# sourceMappingURL=terminos1.js.map

/***/ })

},[221]);
//# sourceMappingURL=main.js.map