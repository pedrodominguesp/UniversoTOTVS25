import { Component, ViewChild } from '@angular/core';
import { ForceBooleanComponentEnum, PoButtonModule, PoChartModule, PoChartOptions, PoChartSerie, PoChartType, PoContainerModule, PoDynamicFormComponent, PoDynamicFormField, PoDynamicFormFieldChanged, PoDynamicFormValidation, PoDynamicModule, PoFieldModule, PoInfoModule, PoInfoOrientation, PoMultiselectOption, PoNotificationService, PoPageModule, PoSelectOption, PoTableColumn, PoTableModule, PoTableRowTemplateArrowDirection, PoWidgetModule } from '@po-ui/ng-components';
import { PoDynamicFormRegisterService } from '../../services/po-dynamic-form-register.service';
import { SamplePoTableTransportService } from '../../services/sample-po-table-transport.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    PoPageModule,
    PoContainerModule,
    PoFieldModule,
    PoChartModule,
    PoTableModule,
    PoWidgetModule,
    PoInfoModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild(PoDynamicFormComponent) dynamicForm!: PoDynamicFormComponent;

  // CHARTS
  type = PoChartType.Gauge;
  optionsSingle: PoChartOptions = {
    descriptionChart: '25% do faturamento'
  };

  optionsRange: PoChartOptions = {
    descriptionChart: 'As vendas aumentaram em 82% no primeiro bimestre de 2020',
    showFromToLegend: true
  };

  turnover: Array<PoChartSerie> = [{ data: 25, label: 'Low rate' }];

  salesRanges: Array<PoChartSerie> = [
    { from: 0, to: 50, label: 'Redução de vendas' },
    { from: 50, to: 75, label: 'Vendas médias' },
    { from: 75, to: 100, label: 'Vendas dispararam' }
  ];

  // TABLE
  columns!: Array<PoTableColumn>;
  items!: Array<any>;
  ArrowDirectionRight: PoTableRowTemplateArrowDirection = PoTableRowTemplateArrowDirection.Right;
  InfoOrientationHorizontal: PoInfoOrientation = PoInfoOrientation.Horizontal;

  readonly statusOptions: Array<PoSelectOption> = [
    { label: 'Delivered', value: 'delivered' },
    { label: 'Transport', value: 'transport' },
    { label: 'Production', value: 'production' }
  ];

  constructor(public poNotification: PoNotificationService,
    private transportService: SamplePoTableTransportService,
    private registerService: PoDynamicFormRegisterService) { }

  ngOnInit() {
    this.columns = this.transportService.getColumns();
    this.items = this.transportService.getItems();
  }

  onChangeFields(changedValue: PoDynamicFormFieldChanged): PoDynamicFormValidation {
    return {
      value: { city: undefined },
      fields: [
        {
          property: 'city',
          gridColumns: 6,
          options: this.registerService.getCity(changedValue.value.state),
          disabled: false
        }
      ]
    };
  }

  isUndelivered(row: any, index: number) {
    return row.status !== 'delivered';
  }

}
