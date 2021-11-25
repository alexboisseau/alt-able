export class CreateRestaurantTableDto {
  public status!: string;

  public number!: number;

  public size!: number;
}

export class RestaurantTableDto extends CreateRestaurantTableDto {
  public id!: string;
}
