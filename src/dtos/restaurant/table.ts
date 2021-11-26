import { RestaurantSeatingPlanDto } from './seatingPlan';
export class CreateRestaurantTableDto {
  public status!: string;

  public number!: number;

  public size!: number;
}

export class RestaurantTableDto extends CreateRestaurantTableDto {
  public declare seatingPlans: RestaurantSeatingPlanDto[];

  public id!: string;
}
