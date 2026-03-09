package router

import "github.com/labstack/echo/v4"

func NewRouter() *echo.Echo {
	e := echo.New()

	e.GET("/health", func(c echo.Context) error {
		return c.JSON(200, map[string]string{
			"message": "ok",
		})
	})
	return e
}
