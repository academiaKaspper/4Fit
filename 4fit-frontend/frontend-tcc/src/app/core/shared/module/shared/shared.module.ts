import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ChipsModule } from 'primeng/chips';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { FieldsetModule } from 'primeng/fieldset';
import { ImageModule } from 'primeng/image';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenuModule } from 'primeng/menu';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ProgressBarModule } from 'primeng/progressbar';
import { RippleModule } from 'primeng/ripple';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { SkeletonModule } from 'primeng/skeleton';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SplitterModule } from 'primeng/splitter';
import { StyleClassModule } from 'primeng/styleclass';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ToolbarModule,
    ButtonModule,
    RippleModule,
    SplitButtonModule,
    AccordionModule,
    ScrollPanelModule,
    InputSwitchModule,
    TabViewModule,
    FieldsetModule,
    ImageModule,
    DynamicDialogModule,
    InputTextModule,
    DividerModule,
    SplitterModule,
    PanelModule,
    TabMenuModule,
    MenuModule,
    TableModule,
    StyleClassModule,
    PanelMenuModule,
    ToastModule,
    DialogModule,
    TooltipModule,
    OverlayPanelModule,
    ConfirmDialogModule,
    SidebarModule,
    ConfirmPopupModule,
    AutoCompleteModule,
    CalendarModule,
    ChipsModule,
    DropdownModule,
    SkeletonModule,
    InputMaskModule,
    ProgressBarModule,
    BadgeModule,
    MessagesModule,
    MessageModule,
    AvatarModule,
    InputNumberModule,
    CascadeSelectModule,
    MultiSelectModule,
    DataViewModule,
    InputTextareaModule,
    MenubarModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    RippleModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    ToolbarModule,
    ButtonModule,
    DataViewModule,
    RippleModule,
    SplitButtonModule,
    AccordionModule,
    TabViewModule,
    DynamicDialogModule,
    AutoCompleteModule,
    CalendarModule,
    ImageModule,
    AvatarModule,
    ChipsModule,
    DropdownModule,
    ProgressBarModule,
    InputMaskModule,
    InputNumberModule,
    CascadeSelectModule,
    MultiSelectModule,
    MessagesModule,
    InputSwitchModule,
    ScrollPanelModule,
    MessageModule,
    InputTextareaModule,
    FieldsetModule,
    InputTextModule,
    TabMenuModule,
    DividerModule,
    SplitterModule,
    PanelModule,
    MenuModule,
    TableModule,
    StyleClassModule,
    PanelMenuModule,
    ToastModule,
    DialogModule,
    TooltipModule,
    SelectButtonModule,
    OverlayPanelModule,
    BadgeModule,
    SkeletonModule,
    ConfirmDialogModule,
    SidebarModule,
    ConfirmPopupModule,
    MenubarModule,
  ],
  providers: [MessageService, ConfirmationService, DialogService],
})
export class SharedModule {}
