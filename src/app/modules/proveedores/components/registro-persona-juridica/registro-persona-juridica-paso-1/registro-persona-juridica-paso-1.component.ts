import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

interface Opcion<T> {
  label: string;
  value: T;
}

@Component({
  selector: 'registro-persona-juridica-paso-1',
  templateUrl: './registro-persona-juridica-paso-1.component.html',
  styleUrls: ['./registro-persona-juridica-paso-1.component.scss'],
  standalone: false,
})
export class RegistroPersonaJuridicaPaso1Component {

  @Input() formulario: FormGroup = new FormGroup({});
  @Output() formularioChange = new EventEmitter<FormGroup>();

  opcionesProcedencia: Opcion<string>[] = [
    { label: 'Nacional (Constituida en Colombia)', value: 'nacional'},
    { label: 'Extranjera con Sucursal en Colombia', value: 'extranjera_sucursal'},
    { label: 'Extranjera sin Domicilio en el País', value: 'extranjera_sin_domicilio'},
  ];

  opcionesCamaraComercio: Opcion<string>[] = [
    { label: 'Cámara de Comercio de Bogotá', value: 'bogota'},
    { label: 'Cámara de Comercio de Medellín', value: 'medellin'},
    { label: 'Cámara de Comercio de Cali', value: 'cali'},
    { label: 'Cámara de Comercio de Barranquilla', value: 'barranquilla'},
    { label: 'Otra Jurisdicción Nacional', value: 'otro'},
  ];

  opcionesTipoOrganizacion: Opcion<string>[] = [
    { label: 'Sociedad por Acciones Simplificada - S.A.S.', value: 'sas' },
    { label: 'Sociedad Anónima - S.A.', value: 'sa' },
    { label: 'Sociedad de Responsabilidad Limitada - Ltda.', value: 'ltda' },
    { label: 'Entidad Sin Ánimo de Lucro - ESAL', value: 'esal' },
    { label: 'Sucursal de Sociedad Extranjera', value: 'sucursal_extranjera' },
  ];

  opcionesTamanoEmpresarial: Opcion<string>[] = [
    { label: 'Microempresa (Hasta 23.563 UVT Servicios)', value: 'micro' },
    { label: 'Pequeña Empresa (Hasta 204.653 UVT Servicios)', value: 'pequena' },
    { label: 'Mediana Empresa (Hasta 483.034 UVT Servicios)', value: 'mediana' },
    { label: 'Gran Empresa (Mayor a 483.034 UVT)', value: 'gran' },
  ];


  opcionesLimitacionEstatutaria: Opcion<boolean>[] = [
    { label: 'No, facultades amplias y suficientes sin límite de cuantía (Estatutos tipo S.A.S.)', value: false },
    { label: 'Sí, requiere autorización previa de Junta Directiva / Asamblea de Accionistas', value: true }
  ];

  opcionesBeneficiariosFinales: Opcion<boolean>[] = [
    { label: 'Sí, titularidad directa/indirecta >= 5%', value: true },
    { label: 'No, participación pública mayoritaria', value: false }
  ];

  opcionesCotizaBolsa: Opcion<boolean>[] = [
    { label: 'No cotiza en bolsa de valores', value: false },
    { label: 'Sí, cotiza activamente en bolsa', value: true }
  ];

  opcionesRevisorFiscal: Opcion<boolean>[] = [
    { label: 'Sí, por monto de activos o estatutos', value: true },
    { label: 'No obligada legalmente', value: false }
  ];

  opcionesGranContribuyente: Opcion<boolean>[] = [
    { label: 'No', value: false },
    { label: 'Sí (Con Resolución Vigente)', value: true }
  ];
  
  opcionesAutorretenedor: Opcion<boolean>[] = [
    { label: 'No', value: false },
    { label: 'Sí (Resolución DIAN)', value: true }
  ];

  opcionesExencionIca: Opcion<boolean>[] = [
    { label: 'No, tarifa plena Distrital', value: false },
    { label: 'Sí, Actividad Exenta Distrital', value: true }
  ];

  opcionesResponsabilidadesFiscales: Opcion<number>[] = [
    { label: '05: Renta Régimen Ordinario', value: 5 },
    { label: '48: Impuesto a las Ventas - IVA', value: 48 },
    { label: '14: Informante de Exógena', value: 14 },
    { label: '42: Obligado a llevar contabilidad', value: 42 }
  ];

  opcionesDepartamento: Opcion<string>[] = [
    { label: 'Bogotá D.C.', value: 'bogota' },
    { label: 'Cundinamarca', value: 'cundinamarca' },
    { label: 'Antioquia', value: 'antioquia' },
    { label: 'Valle del Cauca', value: 'valle_del_cauca' }
  ];

  opcionesCiudadBogota: Opcion<string>[] = [
    { label: 'Bogotá D.C.', value: 'bogota' },
    { label: 'Chía', value: 'chia' },
    { label: 'Soacha', value: 'soacha' }
  ];

  opcionesCiudadCundinamarca: Opcion<string>[] = [
    { label: 'Zipaquirá', value: 'zipaquira' },
    { label: 'Girardot', value: 'girardot' },
    { label: 'Facatativá', value: 'facatativa' }
  ];

  opcionesCiudadAntioquia: Opcion<string>[] = [
    { label: 'Medellín', value: 'medellin' },
    { label: 'Envigado', value: 'envigado' },
    { label: 'Bello', value: 'bello' }
  ];

  opcionesCiudadValleDelCauca: Opcion<string>[] = [
    { label: 'Cali', value: 'cali' },
    { label: 'Palmira', value: 'palmira' },
    { label: 'Buenaventura', value: 'buenaventura' }
  ];

  opcionesTipoVia: Opcion<string>[] = [
    { label: 'Calle', value: 'cl' },
    { label: 'Carrera', value: 'cr' },
    { label: 'Avenida', value: 'av' },
    { label: 'Transversal', value: 'tv' },
    { label: 'Diagonal', value: 'dg' }
  ];

  opcionesTipoInterior: Opcion<string>[] = [
    { label: 'Oficina', value: 'of' },
    { label: 'Local', value: 'lc' },
    { label: 'Piso', value: 'p' },
    { label: 'Edificio', value: 'ed' }
  ];

  opcionesCiudad: Opcion<string>[] = [];

  ngOnInit(): void {
    const departamento = this.formulario.get('departamento')?.value;
    this.onDepartamentoChange(departamento);
  }

  cambiarResponsabilidad(valor: number, seleccionado: boolean): void {
    const responsabilidades = this.formulario.get('responsabilidades')?.value ?? [];
    const actualizadas = seleccionado
      ? [...responsabilidades, valor]
      : responsabilidades.filter((responsabilidad: number) => responsabilidad !== valor);

    this.formulario.get('responsabilidades')?.setValue([...new Set(actualizadas)]);
    this.formularioChange.emit(this.formulario);
  };

  onDepartamentoChange(departamento: string): void {
    switch (departamento) {
      case 'bogota':
        this.opcionesCiudad = this.opcionesCiudadBogota;
        break;
      case 'cundinamarca':
        this.opcionesCiudad = this.opcionesCiudadCundinamarca;
        break;
      case 'antioquia':
        this.opcionesCiudad = this.opcionesCiudadAntioquia;
        break;
      case 'valle_del_cauca':
        this.opcionesCiudad = this.opcionesCiudadValleDelCauca;
        break;
      default:
        this.opcionesCiudad = [];
    } 
    if (this.formulario.get('ciudad')?.value && !this.opcionesCiudad.some(opcion => opcion.value === this.formulario.get('ciudad')?.value)) {
      this.formulario.get('ciudad')?.setValue(null);
    }
  };

}
