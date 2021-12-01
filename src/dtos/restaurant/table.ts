import { IsBoolean, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { RestaurantSeatingPlanDto } from './seatingPlan';
export class CreateRestaurantTableDto {
  @IsBoolean()
  @IsOptional()
  public isFree!: boolean;

  @IsNumber()
  @IsNotEmpty()
  public number!: number;

  @IsNumber()
  @IsNotEmpty()
  public maxSize!: number;
}

export class RestaurantTableDto extends CreateRestaurantTableDto {
  public declare seatingPlans: RestaurantSeatingPlanDto[];

  public id!: string;
}

export class InstallCustomerDto {
  public id: string;
  public customersNumber: number;
}
