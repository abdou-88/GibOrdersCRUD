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

                migrationBuilder.CreateTable(

                name: "Clients",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    clientName = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    clientEmail = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    dateOfJoining = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    clientPhoto = table.Column<string>(type: "nvarchar(500)", nullable: true),
                   
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clients", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Orders");
                 
            migrationBuilder.DropTable(
                name: "Clients");
        }
    }
}
