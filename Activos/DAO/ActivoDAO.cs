﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Activos.Utils;
using Activos.Modelo;
using log4net.Repository.Hierarchy;

namespace Activos.DAO
{
    public class ActivoDAO : GenericDAO<Activo>
    {
        private static ActivoDAO instance = null;

        private ActivoDAO() { }

        public static ActivoDAO getInstance()
        {
            if (instance == null)
                instance = new ActivoDAO();
            return instance;
        }

        public bool saveOrUpdate(Activo activo)
        {
            try
            {
                base.saveOrUpdate(activo);
                return true;
            }
            catch(Exception ex)
            {
                
            }
            return false;
        }

        public Activo get(int id)
        {
            return base.get(id);
        }
    }
}