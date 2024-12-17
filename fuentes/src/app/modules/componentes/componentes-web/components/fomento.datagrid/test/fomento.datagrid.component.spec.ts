import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FomentoDatagridComponent } from "../fomento.datagrid.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { MockComponent, MockModule } from "ng-mocks";
import { ReactiveFormsModule } from "@angular/forms";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { FomentoFiltroColumnasTablaComponent } from "../../fomento.filtro-columnas-tabla/fomento.filtro-columnas-tabla.component";
import { FomentoButtonComponent } from "../../fomento.button/fomento.button.component";
import { FomentoPaginatorComponent } from "../../fomento.paginator/fomento.paginator.component";
import { FomentoSelectComponent } from "../../fomento.select/fomento.select.component";
import { MatSort } from "@angular/material/sort";
import { of } from "rxjs";
import {
  ApiEndpointsService,
  FomentoGestionFiltrosService,
  RequestApiService,
} from "@fomento/i-rf-logic-component-node-lib";
import { FomentoFormularioComponent } from "../../fomento.formulario/fomento.formulario.component";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { KeycloakService } from "keycloak-angular";
import { MatMenuModule } from "@angular/material/menu";
import { PageEvent } from "@angular/material/paginator";

describe("FomentoDatagridComponent", () => {
  let component: FomentoDatagridComponent;
  let fixture: ComponentFixture<FomentoDatagridComponent>;
  let keycloakServiceStub: Partial<KeycloakService>;

  const MOCK_FORMULARIO = {
    sections: [
      {
        label: "Formulario avanzado",
        groups: [
          {
            label: "Filtrar personal",
            rows: [
              {
                filters: [
                  { header: "Cargo", formControlName: "cargo", type: "input" },
                  { header: "Nombre", formControlName: "name", type: "input" },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  // Mock para MatDialog
  const matDialogStub = {
    closeAll() {
      console.log("PRUEBA");
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FomentoDatagridComponent],
      imports: [
        MockComponent(FomentoPaginatorComponent),
        MockComponent(FomentoFiltroColumnasTablaComponent),
        MockModule(ReactiveFormsModule),
        MockModule(MatTableModule),
        MockComponent(FomentoButtonComponent),
        MockComponent(FomentoFormularioComponent),
        MockComponent(FomentoSelectComponent),
        MockModule(MatMenuModule),
        HttpClientTestingModule,
        FomentoGestionFiltrosService,
        ApiEndpointsService,
        RequestApiService,
        FomentoSelectComponent,
        MatDialogModule,
      ],

      providers: [
        { provide: MatDialog, useValue: matDialogStub },
        { provide: "name", useValue: "test" },
        { provide: KeycloakService, useValue: keycloakServiceStub },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FomentoDatagridComponent);
    component = fixture.debugElement.componentInstance;
    component.form = MOCK_FORMULARIO;
    fixture.detectChanges();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("FomentoDatagridComponent", () => {
    describe("Ciclo de vida del componente", () => {
      describe("ngOnInit", () => {
        it('should call "consumeApi"', () => {
          const consumeApiSpy = jest.spyOn(component, "consumeApi");
          component.ngOnInit();
          expect(consumeApiSpy).toHaveBeenCalledTimes(1);
        });
      });
      describe("ngAfterViewInit", () => {
        it('should modify "datasource" with the "sort"', () => {
          component.dataSource = new MatTableDataSource([]);
          const mock_sort = new MatSort();
          component.sort = mock_sort;
          component.ngAfterViewInit();
          expect(component.dataSource.sort).toEqual(mock_sort);
        });
      });
    });

    describe("initTable method", () => {
      it('should generate "actions column"', () => {
        component.actions = true;
        component.initTable();
        expect(component.displayedColumns).toContain("acciones");
      });

      it("should generate columns correctly", () => {
        component.table_headers = [
          { header: "prueba", field: "p", visible: true },
        ];
        component.actions = true;
        component.multicheck = false;
        component.initTable();
        // Verificar que 'acciones' y 'p' estén presentes en displayedColumns sin preocuparse por el orden
        expect(component.displayedColumns).toContain("acciones");
        expect(component.displayedColumns).toContain("p");
      });
    });

    describe("Output event emitters", () => {
      it("should emit helpIconEvent", () => {
        const helpIconSpy = jest.spyOn(component.helpIconAction, "emit");
        component.emitHelpIconEvent();
        expect(helpIconSpy).toHaveBeenCalledTimes(1);
      });

      it("should emit checkEvent", () => {
        const checkSpy = jest.spyOn(component.checkAction, "emit");
        component.emitCheckEvent();
        expect(checkSpy).toHaveBeenCalledTimes(1);
      });

      it("should emit downloadEvent", () => {
        const downloadSpy = jest.spyOn(component.downloadAction, "emit");
        component.emitDownloadEvent();
        expect(downloadSpy).toHaveBeenCalledTimes(1);
      });
    });

    describe("Filter control method", () => {
      describe("CleanFilter method", () => {
        it('should reset filter form in "advance" form', () => {
          component.table_headers = [
            { header: "prueba", field: "p", visible: true },
          ];
          component.initTable();
          component.formArray.value = [{ p: "Prueba" }];
          component.filter = "advance";
          component.cleanFilterEvent();
          const res = component.formArray.value;
          expect(res).toEqual([{ p: "" }]);
        });

        it('should reset filter form in "advance" form', () => {
          component.table_headers = [
            { header: "prueba", field: "p", visible: true },
          ];
          component.initTable();
          component.formArray.value = [{ p: "Prueba" }];
          component.filter = "advance";
          component.cleanFilterEvent();
          const res = component.formArray.value;
          expect(res).toEqual([{ p: "" }]);
        });

        it('should call "APIfiltro" method', () => {
          component.initTable();
          const applyFilterSpy = jest.spyOn(component, "APIfiltro");
          component.cleanFilterEvent();
          expect(applyFilterSpy).toHaveBeenCalledTimes(1);
        });
      });
    });

    describe("API method", () => {
      it("should call API", async () => {
        const apiService = TestBed.inject(RequestApiService);
        const data = { content: [] };
        jest.spyOn(apiService, "get").mockReturnValue(of(data));
        component.consumeApi();
        await fixture.whenStable();
        fixture.detectChanges();
        expect(component.dataSource.data).toEqual(data.content);
      });

      it("should change pages correctly", async () => {
        const page = new PageEvent();
        page.pageIndex = 1;
        page.pageSize = 5;
        const apiService = TestBed.inject(RequestApiService);
        const data = { content: [] };
        component.formArray = { value: { apellido1: "a", nombre: "b" } };
        jest.spyOn(apiService, "post").mockReturnValue(of(data));
        component.changePage(page);
        await fixture.whenStable();
        fixture.detectChanges();
        expect(component.dataSource.data).toEqual(data.content);
      });

      it("should get field-value correctly", () => {
        const res = component.getFieldValue(
          [{ atributo1: { atributo2: "prueba" } }],
          "atributo1.atributo2"
        );
        expect(res[0]).toEqual("prueba");
      });
    });

    describe("onColumnsChange method", () => {
      it("should modify values correctly", () => {
        component.multicheck = false;
        component.actions = true;
        component.onColumnsChange([
          { header: "prueba", field: "p", visible: true },
        ]);
        expect(component.inputColumns).toEqual(["inputp", "inputacciones"]);
      });
    });

    describe("filter methods", () => {
      it("should work correctly recuperarFiltrosUsuarioAPI method", () => {
        const hostApi = "https://pokeapi.co/api/v2/";
        const endpoint = "pokemon/ditto";
        component.recuperarFiltrosUsuarioAPI(hostApi, endpoint);
        expect(component.consultas_guardadas).toEqual(undefined);
      });

      it("should get saved filter correctly (name)", () => {
        component.name = "prueba";
        const apiSpy = jest.spyOn(component, "recuperarFiltrosUsuarioAPI");
        component.getSavedFilterEvent();
        expect(apiSpy).toHaveBeenCalledTimes(1);
      });

      it("should get saved filter correctly (no name)", () => {
        component.name = undefined;
        component.getSavedFilterEvent();
        expect(component.consultas_guardadas).toEqual(["Sin filtro"]);
      });

      it('should work correctly "useFilter" method', () => {
        const rellenarInputSpy = jest.spyOn(component, "rellenarInput");
        component.consultas_guardadas = [];
        component.formArray = { value: [] };
        component.useFilter({});
        expect(rellenarInputSpy).toHaveBeenCalledTimes(1);
      });

      it('should work "getFiltroAvanzado" correctly', () => {
        const apiSpy = jest.spyOn(component, "APIfiltro");
        component.getFiltroAvanzado({});
        expect(apiSpy).toHaveBeenCalledTimes(1);
      });

      it('should work "pruebaFiltro" correctly', () => {
        const apiService = TestBed.inject(RequestApiService);
        const data = { content: [{}], totalElements: 4 };
        jest.spyOn(apiService, "post").mockReturnValue(of(data));
        component.APIfiltro({});
        fixture.detectChanges(); // Asegúrate de detectar los cambios después de la llamada API
        expect(component.paginator_length).toBe(4);
      });
    });
  });

  describe("Multicheck event", () => {
    it("should update checked rows correctly", () => {
      const rowData = "row1";
      component.rowSelected = [];
      component.isCheck(true, rowData);
      expect(component.rowSelected).toEqual(["row1"]);
    });

    it("should update checked rows correctly (from checked => not checked)", () => {
      const rowData = "row1";
      component.rowSelected = ["row1"];
      component.isCheck(false, rowData);
      expect(component.rowSelected).toEqual([]);
    });

    it('should not check all boxes if you not check the "all" button', () => {
      component.rowSelected = ["row1"];
      component.controlCheck(false);
      expect(component.rowSelected).toEqual([]);
    });
  });
});
