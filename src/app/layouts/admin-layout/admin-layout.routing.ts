import { Routes } from '@angular/router';
import { AddClientComponent } from '../../components/add-client/add-client.component';

import { PendingPaymentComponent } from '../../components/pending-payment/pending-payment.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'pending-payment',      component: PendingPaymentComponent },
    { path: 'add-client',      component: AddClientComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent }
];
