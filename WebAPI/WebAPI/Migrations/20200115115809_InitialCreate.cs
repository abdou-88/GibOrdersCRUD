using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(

                name: "Orders",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    clientID = table.Column<string>(type: "nvarchar(10)", nullable: true),
                    orderType = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    oImagePath = table.Column<string>(type: "varchar(MAX)", nullable: true),
                    oVideoPath = table.Column<string>(type: "varchar(MAX)", nullable: true),
                    locationId = table.Column<string>(type: "nvarchar(10)", nullable: true),
                    oComment = table.Column<string>(type: "varchar(MAX)", nullable: true),
                    
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Orders");
        }
    }
}
