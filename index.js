exports.ClientMod = class
{
    constructor(mod)
    {
        this.install = function(installer)
        {
            installer.gpk("S1UI_Chat2.gpk");
        };
    }
}