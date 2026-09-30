import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { PasoStepperVisual } from "src/app/shared/components/stepper-visual/stepper-visual.component";

@Component({
  selector: "app-registro-persona-juridica",
  templateUrl: "./registro-persona-juridica.component.html",
  styleUrls: ["./registro-persona-juridica.component.scss"],
  standalone: false,
})
export class RegistroPersonaJuridicaComponent {
  titulo = "Módulo de Registro de Persona Jurídica";
  pasoActual = 1;

  pasos: PasoStepperVisual[] = [
    { numero: 1, icono: "person", nombre: "Datos Societarios y Representación" },
    { numero: 2, icono: "account_balance", nombre: "Información Financiera" },
    { numero: 3, icono: "description", nombre: "Documentos, RUES y RUP" },
    { numero: 4, icono: "assignment", nombre: "Actividad y Declaración" },
  ];

  finalizar() {
    alert("Se ha presionado el botón Finalizar. Se puede redirigir a otra página o mostrar un mensaje de éxito.");
  }

  formulario: FormGroup = new FormGroup({
    nit: new FormControl('900845120'),
    digitoVerificacion: new FormControl('3'),
    nitConfirmacion: new FormControl('900845120'),
    procedencia: new FormControl('Nacional (Constituida en Colombia)'),
    razonSocial: new FormControl('SOLUCIONES TECNOLÓGICAS E INTEGRACIONES S.A.S.'),
    nombreComercial: new FormControl('INTEGRATECH S.A.S.'),
    matriculaMercantil: new FormControl('03148920'),
    camaraComercio: new FormControl('Cámara de Comercio de Bogotá'),
    fechaConstitucion: new FormControl('2016-04-14'),
    fechaRenovacion: new FormControl('2025-02-18'),
    tipoOrganizacion: new FormControl('Sociedad por Acciones Simplificada - S.A.S.'),
    tamanoEmpresarial: new FormControl('Pequeña Empresa (Hasta 204.653 UVT Servicios)'),
    documentoRepresentante: new FormControl('80234567'),
    cargoRepresentante: new FormControl('Gerente General y Representante Legal Principal'),
    primerApellido: new FormControl('RODRÍGUEZ'),
    segundoApellido: new FormControl('PATIÑO'),
    primerNombre: new FormControl('CARLOS'),
    segundoNombre: new FormControl('EDUARDO'),
    correoRepresentante: new FormControl('gerencia@integratech.com.co'),
    telefonoRepresentante: new FormControl('+57 310 456 7890'),
    limitacionEstatutaria: new FormControl('no'),
    registrarSuplente: new FormControl(false),
    beneficiariosFinales: new FormControl('Sí, titularidad directa/indirecta >= 5%'),
    cotizaBolsa: new FormControl('No cotiza en bolsa de valores'),
    revisorFiscal: new FormControl('Sí, por monto de activos o estatutos'),
    granContribuyente: new FormControl('No'),
    autorretenedor: new FormControl('No'),
    exencionIca: new FormControl('No, tarifa plena Distrital'),
    responsabilidadRenta: new FormControl(true),
    responsabilidadIva: new FormControl(true),
    responsabilidadExogena: new FormControl(true),
    responsabilidadContabilidad: new FormControl(true),
    departamento: new FormControl('Bogotá D.C.'),
    ciudad: new FormControl('Bogotá D.C.'),
    tipoVia: new FormControl('AVENIDA CARRERA'),
    detalleVia: new FormControl('68'),
    numeroCruce: new FormControl('45'),
    placaPuerta: new FormControl('20'),
    interiorTipo: new FormControl('OF'),
    detalleInterior: new FormControl('502'),
    correoNotificaciones: new FormControl('notificaciones@integratech.com.co'),
    correoNotificacionesConfirmacion: new FormControl('notificaciones@integratech.com.co'),
    telefonoFijo: new FormControl('+57 (601) 745 8900'),
    extension: new FormControl('104'),
    telefonoAlterno: new FormControl('3158890012'),
    sitioWeb: new FormControl('https://www.integratech.com.co'),
    contactoComercial: new FormControl('MARCELA GÓMEZ RINCÓN'),
    telefonoAsesor: new FormControl('3186749920'),
    aceptaTerminos: new FormControl(false)
  });

  ngOnInit() {
    for (const controlName in this.formulario.controls) {
      this.formulario.get(controlName)?.valueChanges.subscribe(value => {
        console.log(`Valor del control ${controlName} cambiado a:`, value);
      });
    };
  }

}
